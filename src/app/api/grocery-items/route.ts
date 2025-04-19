import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getOrCreateUser } from '@/lib/user-service';

export async function POST(request: NextRequest) {
  try {
    // Get the authenticated user from the database
    const user = await getOrCreateUser();
    
    // If no user is found, return unauthorized
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Parse the request body
    const { name, quantity } = await request.json();
    
    // Validate the input
    if (!name || typeof name !== 'string') {
      return NextResponse.json(
        { error: 'Name is required and must be a string' },
        { status: 400 }
      );
    }
    
    // Create the grocery item linked to the user
    const groceryItem = await prisma.groceryItem.create({
      data: {
        name,
        quantity: quantity ? Number(quantity) : 1,
        userId: user.id,
      },
    });
    
    return NextResponse.json(groceryItem, { status: 201 });
  } catch (error) {
    console.error('Error creating grocery item:', error);
    return NextResponse.json(
      { error: 'Failed to create grocery item' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get the authenticated user from the database
    const user = await getOrCreateUser();
    
    // If no user is found, return unauthorized
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Get all grocery items for the user
    const groceryItems = await prisma.groceryItem.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return NextResponse.json(groceryItems);
  } catch (error) {
    console.error('Error fetching grocery items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch grocery items' },
      { status: 500 }
    );
  }
}
