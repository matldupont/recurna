import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth0 } from "./lib/auth0";

// Define public routes that don't require authentication
const publicRoutes = [
	"/",
	"/auth/login",
	"/auth/callback",
	"/auth/logout",
	"/api/auth/session",
];

// Define routes that should be protected
const protectedRoutes = [
	"/dashboard",
	"/profile",
	"/settings",
	"/api/protected",
];

/**
 * Middleware function to handle authentication and route protection
 */
export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Check if the route is public
	const isPublicRoute = publicRoutes.some(
		(route) => pathname === route || pathname.startsWith(`${route}/`),
	);

	// Check if the route should be protected
	const isProtectedRoute = protectedRoutes.some(
		(route) => pathname === route || pathname.startsWith(`${route}/`),
	);

	// For protected routes, check authentication before proceeding
	if (isProtectedRoute) {
		// Get the user session
		const session = await auth0.getSession();

		// If no session exists, redirect to login
		if (!session) {
			const url = new URL("/auth/login", request.url);
			url.searchParams.set("returnTo", pathname);
			return NextResponse.redirect(url);
		}
	}

	// Process Auth0 middleware for all routes
	// This must come after our protection check but before returning
	return auth0.middleware(request);
}

export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
	],
};
