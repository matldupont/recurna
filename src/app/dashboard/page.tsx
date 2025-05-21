import { redirect } from "next/navigation";
import { requireAuth } from "@/lib/auth-utils";

export default async function Dashboard() {
	// This will redirect to login if user is not authenticated
	await requireAuth();

	// Redirect to the list view by default
	return redirect("/dashboard/list");
}
