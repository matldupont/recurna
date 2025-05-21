import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getOrCreateUser } from '@/lib/user-service';

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {

  try {
    const { id } = await context.params;
    
    // Get the authenticated user from the database
    const user = await getOrCreateUser();
    
    // If no user is found, return unauthorized
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Get user ID from the database
    const userId = user.id;
    
    // Parse the item ID from the URL parameter
    const itemId = Number.parseInt(id, 10);
    
    if (Number.isNaN(itemId)) {
      return NextResponse.json(
        { error: 'Invalid item ID' },
        { status: 400 }
      );
    }
    
    // Check if the item exists and belongs to the user
    const existingItem = await prisma.groceryItem.findUnique({
      where: { id: itemId },
    });
    
    if (!existingItem) {
      return NextResponse.json(
        { error: 'Item not found' },
        { status: 404 }
      );
    }
    

    if (existingItem.userId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized to delete this item' },
        { status: 403 }
      );
    }
    
    // Delete the item
    await prisma.groceryItem.delete({
      where: { id: itemId },
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting grocery item:', error);
    return NextResponse.json(
      { error: 'Failed to delete grocery item' },
      { status: 500 }
    );
  }
}
