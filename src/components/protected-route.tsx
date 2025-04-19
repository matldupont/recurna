import type { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { auth0 } from '@/lib/auth0';

interface ProtectedRouteProps {
  children: ReactNode;
  fallbackUrl?: string;
  currentPath?: string;
}

/**
 * A component wrapper that protects routes by checking for authentication
 * If user is not authenticated, they will be redirected to login
 */
export async function ProtectedRoute({ 
  children, 
  fallbackUrl = '/auth/login',
  currentPath
}: ProtectedRouteProps) {
  const session = await auth0.getSession();
  
  if (!session) {
    // Redirect to login if not authenticated
    // Use the provided currentPath or a default empty string
    // We can't use window.location in server components
    const returnPath = currentPath || '';
    const redirectUrl = returnPath 
      ? `${fallbackUrl}?returnTo=${encodeURIComponent(returnPath)}`
      : fallbackUrl;
    
    redirect(redirectUrl);
  }
  
  return <>{children}</>;
}
