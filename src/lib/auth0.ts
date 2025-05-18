import { Auth0Client } from "@auth0/nextjs-auth0/server";

// Create a properly configured Auth0 client
// This ensures that all environment variables are properly loaded
export const auth0 = new Auth0Client({
	// These will be loaded from .env.local
	// AUTH0_SECRET, APP_BASE_URL, AUTH0_ISSUER_BASE_URL, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET
	session: {
		// Make the session last longer (24 hours)
		absoluteDuration: 60 * 60 * 24,
	},
	routes: {
		callback: "/auth/callback",
		login: "/auth/login",
		logout: "/auth/logout",
	},
});
