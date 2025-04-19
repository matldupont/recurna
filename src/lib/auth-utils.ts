import { auth0 } from "./auth0";
import { redirect } from "next/navigation";

/**
 * Checks if the user is authenticated and redirects to login if not
 * @param redirectTo Optional path to redirect to after login
 * @returns The user session if authenticated
 */
export async function requireAuth(redirectTo?: string) {
  const session = await auth0.getSession();
  
  if (!session) {
    const loginPath = redirectTo 
      ? `/auth/login?returnTo=${encodeURIComponent(redirectTo)}`
      : "/auth/login";
    redirect(loginPath);
  }
  
  return session;
}

/**
 * Checks if the user is authenticated
 * @returns Boolean indicating if user is authenticated
 */
export async function isAuthenticated() {
  const session = await auth0.getSession();
  return !!session;
}
