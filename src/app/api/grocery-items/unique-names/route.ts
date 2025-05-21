import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getOrCreateUser } from '@/lib/user-service';

export async function GET() {
  try {
    // Get the authenticated user from the database
    const user = await getOrCreateUser();
    
    // If no user is found, return unauthorized
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Get user ID from the database
    const userId = user.id;
    
    // Fetch all unique item names for this user
    const items = await prisma.groceryItem.findMany({
      where: { userId },
      select: { name: true },
      distinct: ['name'],
      orderBy: { name: 'asc' }
    });
    
    // Extract just the names
    const uniqueNames = items.map(item => item.name);
    
    return NextResponse.json(uniqueNames);
  } catch (error) {
    console.error('Error fetching unique item names:', error);
    return NextResponse.json(
      { error: 'Failed to fetch unique item names' },
      { status: 500 }
    );
  }
}
