import { GrocerySummaryView } from "@/components/grocery/GrocerySummaryView";
import { GroceryDashboardTabs } from "@/components/grocery/GroceryDashboardTabs";
import { ProtectedRoute } from "@/components/protected-route";
import { requireAuth } from "@/lib/auth-utils";
import {
  getGroceryCategoriesHierarchy,
  getOrCreateDefaultCategories,
} from "@/lib/grocery-service";
import { getOrCreateUser } from "@/lib/user-service";

export default async function GrocerySummaryPage() {
  // This will redirect to login if user is not authenticated
  await requireAuth();

  // Get the user from the database (or create if it doesn't exist)
  const user = await getOrCreateUser();

  if (!user) {
    return null; // This should never happen due to ProtectedRoute, but TypeScript needs it
  }

  // Ensure the user has default categories
  await getOrCreateDefaultCategories(user.id);

  // Get the categories in hierarchical structure
  const categories = await getGroceryCategoriesHierarchy(user.id);

  return (
    <ProtectedRoute currentPath="/dashboard/summary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Grocery Dashboard</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <GroceryDashboardTabs activeTab="summary" />
          
          {/* Client-side grocery summary component */}
          <div className="mt-4">
            <GrocerySummaryView
              userId={user.id}
              initialCategories={categories}
            />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
