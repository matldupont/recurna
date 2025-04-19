// For edge runtime environments (like middleware)
// We'll use a different approach that avoids Prisma initialization issues

/**
 * This function is a placeholder that indicates we're in an edge environment
 * and should not use Prisma directly. Instead, we'll handle database operations
 * in server components or API routes.
 *
 * @returns null - Indicates Prisma is not available in edge environments
 */
export function getPrismaEdge() {
	console.warn(
		"Prisma is not available in edge environments. Use server components or API routes instead.",
	);
	return null;
}

/**
 * Check if we're in an edge runtime environment
 * @returns boolean indicating if we're in an edge runtime
 */
export function isEdgeRuntime() {
	return process.env.NEXT_RUNTIME === "edge";
}
