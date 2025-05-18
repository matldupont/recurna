import { GroceryDashboard } from "@/components/grocery/GroceryDashboard";
import { ProtectedRoute } from "@/components/protected-route";
import { requireAuth } from "@/lib/auth-utils";
import {
	getGroceryCategoriesHierarchy,
	getOrCreateDefaultCategories,
} from "@/lib/grocery-service";
import { getOrCreateUser } from "@/lib/user-service";

export default async function Dashboard() {
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
	console.log("Categories:", categories);

	return (
		<ProtectedRoute currentPath="/dashboard">
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-2xl font-bold mb-6">Dashboard</h1>

				<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
					<h2 className="text-xl font-semibold mb-4">
						Welcome, {user.name || "User"}
					</h2>
					<p className="mb-6">
						Your grocery list is organized by categories below.
					</p>

					{/* Client-side grocery dashboard component */}
					<div className="mt-4">
						<div
							id="grocery-dashboard"
							data-user-id={user.id}
							data-categories={JSON.stringify(categories)}
						>
							<GroceryDashboard
								userId={user.id}
								initialCategories={categories}
							/>
						</div>
					</div>
				</div>
			</div>
		</ProtectedRoute>
	);
}
