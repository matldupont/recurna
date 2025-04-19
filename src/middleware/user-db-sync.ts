import { auth0 } from "@/lib/auth0";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Middleware to handle Auth0 user data
 * This sets a header that will be used by server components to sync user data with the database
 */
export async function userDbSyncMiddleware(request: NextRequest) {
	// Only run this middleware after successful authentication
	const session = await auth0.getSession();

	if (session) {
		const { sub: auth0Id, email } = session.user;

		if (auth0Id && email) {
			// Instead of directly using Prisma in middleware (which causes initialization issues),
			// we'll set a header that indicates this user needs to be synced with the database
			// The actual sync will happen in server components or API routes
			const response = NextResponse.next();
			response.headers.set("x-auth0-user-sync", "true");
			response.headers.set("x-auth0-user-id", auth0Id);
			return response;
		}
	}

	// Continue with the request
	return NextResponse.next();
}
