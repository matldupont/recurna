import { GrocerySummaryView } from "@/components/grocery/GrocerySummaryView";
import { GroceryDashboardTabs } from "@/components/grocery/GroceryDashboardTabs";
import { getGroceryCategoriesHierarchy } from "@/lib/grocery-service";
import { getOrCreateUser } from "@/lib/user-service";

export default async function GrocerySummaryPage() {
  // Get the user from the database (or create if it doesn't exist)
  // Authentication is handled by the layout
  const user = await getOrCreateUser();

  if (!user) {
    return null; // This should never happen due to layout authentication, but TypeScript needs it
  }

  // Get the categories in hierarchical structure
  const categories = await getGroceryCategoriesHierarchy(user.id);

  return (
    <>
      <GroceryDashboardTabs activeTab="summary" />
      
      {/* Client-side grocery summary component */}
      <div className="mt-4">
        <GrocerySummaryView
          userId={user.id}
          initialCategories={categories}
        />
      </div>
    </>
  );
}
