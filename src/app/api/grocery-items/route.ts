import { prisma } from "@/lib/db";
import { getOrCreateUser } from "@/lib/user-service";
import type { GroceryItem } from "@/generated/prisma";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		// Get the authenticated user from the database
		const user = await getOrCreateUser();

		// If no user is found, return unauthorized
		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		// Parse the request body
		const { name, quantity, categoryId } = await request.json();

		// Validate the input
		if (!name || typeof name !== "string") {
			return NextResponse.json(
				{ error: "Name is required and must be a string" },
				{ status: 400 },
			);
		}

		// Create the grocery item linked to the user
		const groceryItem = await prisma.groceryItem.create({
			data: {
				name,
				quantity: quantity ? Number(quantity) : 1,
				userId: user.id,
				categoryId,
			},
		});

		return NextResponse.json(groceryItem, { status: 201 });
	} catch (error) {
		console.error("Error creating grocery item:", error);
		return NextResponse.json(
			{ error: "Failed to create grocery item" },
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
		const { id, action } = await request.json();

		// Validate the input
		if (!id || typeof id !== "number") {
			return NextResponse.json(
				{ error: "Item ID is required and must be a number" },
				{ status: 400 },
			);
		}

		if (action !== "toggle") {
			return NextResponse.json(
				{ error: "Invalid action. Supported actions: toggle" },
				{ status: 400 },
			);
		}

		// Get the current item
		const item = await prisma.groceryItem.findFirst({
			where: {
				id,
				userId: user.id, // Ensure the item belongs to the user
			},
		});

		if (!item) {
			return NextResponse.json(
				{ error: "Item not found or does not belong to user" },
				{ status: 404 },
			);
		}

		// Toggle the checked status
		const updatedItem = await prisma.groceryItem.update({
			where: { id },
			data: {
				checked: !item.checked,
			},
		});

		return NextResponse.json(updatedItem);
	} catch (error) {
		console.error("Error updating grocery item:", error);
		return NextResponse.json(
			{ error: "Failed to update grocery item" },
			{ status: 500 },
		);
	}
}

export async function GET(request: NextRequest) {
	try {
		// Get the authenticated user from the database
		const user = await getOrCreateUser();

		// If no user is found, return unauthorized
		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		// Check if we should group by category
		const url = new URL(request.url);
		const groupByCategory = url.searchParams.get("groupByCategory") === "true";

		if (groupByCategory) {
			// Get items grouped by category
			const groceryItems = await prisma.groceryItem.findMany({
				where: {
					userId: user.id,
				},
				include: {
					category: true,
				},
				orderBy: {
					createdAt: "desc",
				},
			});

			// Group items by category
			const categorized: Record<string, GroceryItem[]> = {};
			const uncategorized: GroceryItem[] = [];

			for (const item of groceryItems) {
				if (item.categoryId) {
					if (!categorized[item.categoryId]) {
						categorized[item.categoryId] = [];
					}
					categorized[item.categoryId].push(item);
				} else {
					uncategorized.push(item);
				}
			}

			return NextResponse.json({ categorized, uncategorized });
		}
		
		// Get all grocery items for the user (not grouped)
		const groceryItems = await prisma.groceryItem.findMany({
			where: {
				userId: user.id,
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		return NextResponse.json(groceryItems);
	} catch (error) {
		console.error("Error fetching grocery items:", error);
		return NextResponse.json(
			{ error: "Failed to fetch grocery items" },
			{ status: 500 },
		);
	}
}
