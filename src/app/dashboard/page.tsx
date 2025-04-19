import { ProtectedRoute } from "@/components/protected-route";
import { requireAuth } from "@/lib/auth-utils";
import { Button } from "@/components/ui/button";
import { getOrCreateUser } from "@/lib/user-service";
import { prisma } from "@/lib/db";
import AddGroceryItem from "./add-grocery-item";

export default async function Dashboard() {
  // This will redirect to login if user is not authenticated
  const session = await requireAuth();
  
  // Get the user from the database (or create if it doesn't exist)
  const dbUser = await getOrCreateUser();
  
  // Get the user's grocery items
  const groceryItems = dbUser ? await prisma.groceryItem.findMany({
    where: { userId: dbUser.id },
    orderBy: { createdAt: 'desc' },
  }) : [];
  
  return (
    <ProtectedRoute currentPath="/dashboard">
      <main className="flex min-h-screen flex-col items-center p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-4">Welcome, {dbUser?.name || 'User'}</h2>
          <p className="mb-4">This is a protected dashboard page. Only authenticated users can see this content.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Your Grocery Items</h3>
              {groceryItems.length > 0 ? (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-4 max-h-96 overflow-y-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b dark:border-gray-600">
                        <th className="text-left py-2">Name</th>
                        <th className="text-right py-2">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {groceryItems.map((item: { id: number; name: string; quantity: number; createdAt: Date }) => (
                        <tr key={item.id} className="border-b dark:border-gray-600">
                          <td className="py-2">{item.name}</td>
                          <td className="text-right py-2">{item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-4 text-center">
                  <p>No grocery items yet. Add your first item!</p>
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Add New Item</h3>
              <AddGroceryItem />
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <Button variant="outline" asChild>
              <a href="/">Back to Home</a>
            </Button>
            <Button variant="default" asChild>
              <a href="/profile">View Profile</a>
            </Button>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
