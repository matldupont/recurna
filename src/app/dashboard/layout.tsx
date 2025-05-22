import { ProtectedRoute } from "@/components/protected-route";
import { requireAuth } from "@/lib/auth-utils";
import { getOrCreateUser } from "@/lib/user-service";
import { getOrCreateDefaultCategories } from "@/lib/grocery-service";
import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  // This will redirect to login if user is not authenticated
  await requireAuth();

  // Get the user from the database (or create if it doesn't exist)
  const user = await getOrCreateUser();

  if (!user) {
    return null; // This should never happen due to ProtectedRoute, but TypeScript needs it
  }

  // Ensure the user has default categories
  await getOrCreateDefaultCategories(user.id);

  return (
    <ProtectedRoute currentPath="/dashboard">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Grocery Dashboard</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg md:shadow-sm md:p-6">
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}
