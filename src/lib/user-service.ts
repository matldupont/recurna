import { prisma, getDb } from './db';
import { auth0 } from './auth0';
import type { User } from '../generated/prisma';

/**
 * Gets or creates a user in the database based on Auth0 session
 * @returns The user record from the database
 */
export async function getOrCreateUser(): Promise<User | null> {
  // Get the Auth0 session
  const session = await auth0.getSession();
  
  // If no session exists, return null
  if (!session) {
    return null;
  }
  
  const { sub: auth0Id, email, name, picture } = session.user;
  
  if (!auth0Id || !email) {
    console.error('Auth0 session missing required user data');
    return null;
  }
  
  try {
    // Try to find the user by Auth0 ID
    let user = await prisma.user.findUnique({
      where: { auth0Id },
    });
    
    // If user doesn't exist, create a new one
    if (!user) {
      user = await prisma.user.create({
        data: {
          auth0Id,
          email,
          name: name || null,
          picture: picture || null,
        },
      });
      console.log(`Created new user with Auth0 ID: ${auth0Id}`);
    }
    
    return user;
  } catch (error) {
    console.error('Error getting or creating user:', error);
    return null;
  }
}

/**
 * Gets a user from the database by Auth0 ID
 * @param auth0Id The Auth0 user ID (sub)
 * @returns The user record from the database
 */
export async function getUserByAuth0Id(auth0Id: string): Promise<User | null> {
  try {
    return await prisma.user.findUnique({
      where: { auth0Id },
    });
  } catch (error) {
    console.error('Error getting user by Auth0 ID:', error);
    return null;
  }
}

/**
 * Updates a user's information in the database
 * @param auth0Id The Auth0 user ID (sub)
 * @param data The data to update
 * @returns The updated user record
 */
export async function updateUser(
  auth0Id: string, 
  data: { name?: string; picture?: string; email?: string }
): Promise<User | null> {
  try {
    return await prisma.user.update({
      where: { auth0Id },
      data,
    });
  } catch (error) {
    console.error('Error updating user:', error);
    return null;
  }
}
