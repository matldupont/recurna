import { Button } from "@/components/ui/button";
import { auth0 } from "@/lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();
  
  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold mb-6">Welcome to Recurna!</h1>
          <p className="text-xl mb-8">Sign in to access your protected content</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild className="px-8 py-2">
              <a href="/auth/login?screen_hint=signup">Sign up</a>
            </Button>
            <Button variant="default" asChild className="px-8 py-2">
              <a href="/auth/login">Log in</a>
            </Button>
          </div>
        </div>
      </main>
    );
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">Welcome to Recurna!</h1>
        <p className="text-xl mb-4">Hello, {session.user?.name || 'User'}!</p>
        <p className="mb-8">You're logged in and can access protected content.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button variant="default" asChild className="px-6 py-2">
            <a href="/dashboard">Go to Dashboard</a>
          </Button>
          <Button variant="outline" asChild className="px-6 py-2">
            <a href="/profile">View Profile</a>
          </Button>
          <Button variant="outline" asChild className="px-6 py-2 sm:col-span-2">
            <a href="/auth/logout">Log out</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
