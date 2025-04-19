// This file provides a unified database access approach
// that works in both server and edge environments

import { PrismaClient } from "../generated/prisma";
import { isEdgeRuntime } from "./prisma-edge";

// For server environments, create a singleton PrismaClient
const prismaClientSingleton = () => {
	return new PrismaClient({
		log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
	});
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClientSingleton | undefined;
};

// Create or reuse the Prisma client singleton
const prismaBase = globalForPrisma.prisma ?? prismaClientSingleton();

// In development, save the client to avoid multiple instances
if (process.env.NODE_ENV !== "production") {
	globalForPrisma.prisma = prismaBase;
}

/**
 * Get a database client that works in both server and edge environments
 * In server environments, this returns the Prisma client
 * In edge environments, this returns null (database operations should be done via API routes)
 */
export function getDb() {
	// Check if we're in an edge runtime
	if (isEdgeRuntime()) {
		console.warn(
			"Database operations are not available in edge environments. Use API routes instead.",
		);
		return null;
	}

	// Return the Prisma client for server environments
	return prismaBase;
}

// Export the Prisma client for direct use in server environments
export const prisma = prismaBase;
