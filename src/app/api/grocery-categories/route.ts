import { prisma } from "@/lib/db";
import { getOrCreateUser } from "@/lib/user-service";
import { getGroceryCategoriesHierarchy, createGroceryCategory } from "@/lib/grocery-service";
import type { GroceryCategory } from "@/generated/prisma";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Get the authenticated user from the database
    const user = await getOrCreateUser();

    // If no user is found, return unauthorized
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if we should return hierarchical categories
    const url = new URL(request.url);
    const hierarchical = url.searchParams.get("hierarchical") === "true";

    if (hierarchical) {
      // Get hierarchical categories
      const categories = await getGroceryCategoriesHierarchy(user.id);
      return NextResponse.json(categories);
    }

    // Get flat list of categories
    const categories = await prisma.groceryCategory.findMany({
      where: { userId: user.id },
      orderBy: { name: "asc" },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching grocery categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch grocery categories" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get the authenticated user from the database
    const user = await getOrCreateUser();

    // If no user is found, return unauthorized
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse the request body
    const { name, parentId, color, icon } = await request.json();

    // Validate the input
    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Name is required and must be a string" },
        { status: 400 },
      );
    }

    // Create the category
    const category = await createGroceryCategory(user.id, {
      name,
      parentId,
      color,
      icon,
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error("Error creating grocery category:", error);
    return NextResponse.json(
      { error: "Failed to create grocery category" },
      { status: 500 },
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    // Get the authenticated user from the database
    const user = await getOrCreateUser();

    // If no user is found, return unauthorized
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse the request body
    const { id, name, parentId, color, icon } = await request.json();

    // Validate the input
    if (!id) {
      return NextResponse.json(
        { error: "Category ID is required" },
        { status: 400 },
      );
    }

    // Check if the category exists and belongs to the user
    const existingCategory = await prisma.groceryCategory.findFirst({
      where: {
        id,
        userId: user.id,
      },
    });

    if (!existingCategory) {
      return NextResponse.json(
        { error: "Category not found or does not belong to user" },
        { status: 404 },
      );
    }

    // Update the category
    const updatedCategory = await prisma.groceryCategory.update({
      where: { id },
      data: {
        name: name !== undefined ? name : undefined,
        parentId: parentId !== undefined ? parentId : undefined,
        color: color !== undefined ? color : undefined,
        icon: icon !== undefined ? icon : undefined,
      },
    });

    return NextResponse.json(updatedCategory);
  } catch (error) {
    console.error("Error updating grocery category:", error);
    return NextResponse.json(
      { error: "Failed to update grocery category" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // Get the authenticated user from the database
    const user = await getOrCreateUser();

    // If no user is found, return unauthorized
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the category ID from the URL
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Category ID is required" },
        { status: 400 },
      );
    }

    // Check if the category exists and belongs to the user
    const existingCategory = await prisma.groceryCategory.findFirst({
      where: {
        id,
        userId: user.id,
      },
    });

    if (!existingCategory) {
      return NextResponse.json(
        { error: "Category not found or does not belong to user" },
        { status: 404 },
      );
    }

    // Check if the category has items
    const itemsCount = await prisma.groceryItem.count({
      where: { categoryId: id },
    });

    if (itemsCount > 0) {
      return NextResponse.json(
        { error: "Cannot delete category with items. Remove items first." },
        { status: 400 },
      );
    }

    // Check if the category has children
    const childrenCount = await prisma.groceryCategory.count({
      where: { parentId: id },
    });

    if (childrenCount > 0) {
      return NextResponse.json(
        { error: "Cannot delete category with children. Remove children first." },
        { status: 400 },
      );
    }

    // Delete the category
    await prisma.groceryCategory.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting grocery category:", error);
    return NextResponse.json(
      { error: "Failed to delete grocery category" },
      { status: 500 },
    );
  }
}
