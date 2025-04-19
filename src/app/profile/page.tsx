import { ProtectedRoute } from "@/components/protected-route";
import { Button } from "@/components/ui/button";
import { requireAuth } from "@/lib/auth-utils";
import { prisma } from "@/lib/db";
import { getOrCreateUser } from "@/lib/user-service";

// Helper function to ensure user data is synced with the database
async function syncUserData() {
	// Get the base URL from environment or use a default for local development
	const baseUrl = process.env.APP_BASE_URL || "http://localhost:3000";

	// Call the sync API to ensure the user data is in the database
	// Using an absolute URL is required for server components
	const response = await fetch(`${baseUrl}/api/auth/sync`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});

	if (!response.ok) {
		console.error("Failed to sync user data");
		return null;
	}

	return await response.json();
}

export default async function Profile() {
	// This will redirect to login if user is not authenticated
	const session = await requireAuth();

	// Sync user data with the database using the API route
	// This avoids Prisma initialization issues in middleware
	const syncedUser = await syncUserData();

	// Get the user from the database as a fallback
	const dbUser = syncedUser || (await getOrCreateUser());

	// Get the user's grocery items if we have a user
	const groceryItems = dbUser
		? await prisma.groceryItem.findMany({
				where: { userId: dbUser.id },
				orderBy: { createdAt: "desc" },
			})
		: [];

	return (
		<ProtectedRoute currentPath="/profile">
			<main className="flex min-h-screen flex-col items-center justify-center p-8">
				<h1 className="text-3xl font-bold mb-6">User Profile</h1>
				<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-3xl">
					<div className="flex flex-col items-center mb-6">
						{dbUser?.picture ? (
							<img
								src={dbUser.picture}
								alt="Profile"
								className="w-24 h-24 rounded-full mb-4"
							/>
						) : (
							<div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-4">
								<span className="text-2xl">
									{dbUser?.name?.charAt(0) || "U"}
								</span>
							</div>
						)}
						<h2 className="text-xl font-semibold">{dbUser?.name || "User"}</h2>
						<p className="text-gray-500">{dbUser?.email}</p>
					</div>

					<div className="space-y-4">
						<div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
							<h3 className="font-medium mb-2">Database User Information</h3>
							<p>Database ID: {dbUser?.id}</p>
							<p>Auth0 ID: {dbUser?.auth0Id}</p>
							<p>Email: {dbUser?.email}</p>
							<p>Created: {dbUser?.createdAt.toLocaleString()}</p>
						</div>

						<div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
							<h3 className="font-medium mb-2">
								Your Grocery Items ({groceryItems.length})
							</h3>
							{groceryItems.length > 0 ? (
								<ul className="list-disc pl-5">
									{groceryItems.map(
										(item: { id: number; name: string; quantity: number }) => (
											<li key={item.id}>
												{item.name} (Qty: {item.quantity})
											</li>
										),
									)}
								</ul>
							) : (
								<p>No grocery items yet.</p>
							)}
						</div>

						<div className="flex justify-between mt-6">
							<Button variant="outline" asChild>
								<a href="/dashboard">Back to Dashboard</a>
							</Button>
							<Button variant="default" asChild>
								<a href="/settings">Account Settings</a>
							</Button>
						</div>
					</div>
				</div>
			</main>
		</ProtectedRoute>
	);
}
