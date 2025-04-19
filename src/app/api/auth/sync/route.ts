import { auth0 } from "@/lib/auth0";
import { prisma } from "@/lib/db";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * API route to sync Auth0 user data with the database
 * This runs in a server environment where Prisma works properly
 */
export async function GET(request: NextRequest) {
	try {
		// Get the Auth0 session
		const session = await auth0.getSession();

		// If no session exists, return unauthorized
		if (!session) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const { sub: auth0Id, email, name, picture } = session.user;

		if (!auth0Id || !email) {
			return NextResponse.json(
				{ error: "Missing required user data" },
				{ status: 400 },
			);
		}

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
		} else {
			// Update user information if it has changed
			if (
				user.email !== email ||
				user.name !== name ||
				user.picture !== picture
			) {
				user = await prisma.user.update({
					where: { auth0Id },
					data: {
						email,
						name: name || null,
						picture: picture || null,
					},
				});
				console.log(`Updated user with Auth0 ID: ${auth0Id}`);
			}
		}

		// Return success with the user data (excluding sensitive fields)
		return NextResponse.json({
			id: user.id,
			auth0Id: user.auth0Id,
			email: user.email,
			name: user.name,
			picture: user.picture,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
		});
	} catch (error) {
		console.error("Error syncing user with database:", error);
		return NextResponse.json(
			{ error: "Failed to sync user with database" },
			{ status: 500 },
		);
	}
}
