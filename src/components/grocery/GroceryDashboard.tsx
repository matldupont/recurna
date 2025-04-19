"use client";

import type { GroceryCategory, GroceryItem } from "@/generated/prisma";
import { useEffect, useState } from "react";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "../../components/ui/tabs";
import { CategoryList } from "./CategoryList";
import { CategoryManager } from "./CategoryManager";

interface GroceryDashboardProps {
	userId: string;
	initialCategories?: GroceryCategory[];
}

export function GroceryDashboard({ userId }: GroceryDashboardProps) {
	const [categories, setCategories] = useState<GroceryCategory[]>([]);
	const [items, setItems] = useState<{
		categorized: Record<string, GroceryItem[]>;
		uncategorized: GroceryItem[];
	}>({
		categorized: {},
		uncategorized: [],
	});
	const [isLoading, setIsLoading] = useState(true);
	const [activeTab, setActiveTab] = useState("items");

	// Get data from the data attributes if this component is hydrated client-side
	useEffect(() => {
		const dashboardElement = document.getElementById("grocery-dashboard");
		if (dashboardElement) {
			try {
				const categoriesData = dashboardElement.getAttribute("data-categories");
				if (categoriesData) {
					setCategories(JSON.parse(categoriesData));
				}
			} catch (error) {
				console.error("Error parsing categories data:", error);
			}
		}

		// Fetch grocery items
		fetchGroceryItems();
	}, []);

	// Initialize with empty data if items is undefined
	useEffect(() => {
		if (!items) {
			setItems({
				categorized: {},
				uncategorized: [],
			});
		}
	}, [items]);

	// Fetch grocery items from the API
	const fetchGroceryItems = async () => {
		try {
			setIsLoading(true);
			const response = await fetch("/api/grocery-items?groupByCategory=true");
			if (response.ok) {
				const data = await response.json();
				// Ensure data has the expected structure
				setItems({
					categorized: data.categorized || {},
					uncategorized: data.uncategorized || [],
				});
			}
		} catch (error) {
			console.error("Error fetching grocery items:", error);
			// Set default empty state on error
			setItems({
				categorized: {},
				uncategorized: [],
			});
		} finally {
			setIsLoading(false);
		}
	};

	// Fetch categories from the API
	const fetchCategories = async () => {
		try {
			const response = await fetch("/api/grocery-categories?hierarchical=true");
			if (response.ok) {
				const data = await response.json();
				setCategories(data);
			}
		} catch (error) {
			console.error("Error fetching categories:", error);
		}
	};

	// Toggle an item's checked status
	const handleToggleItem = async (itemId: number) => {
		try {
			const response = await fetch("/api/grocery-items", {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: itemId,
					action: "toggle",
				}),
			});

			if (response.ok) {
				// Refresh the items
				fetchGroceryItems();
			}
		} catch (error) {
			console.error("Error toggling item:", error);
		}
	};

	// Add a new grocery item
	const handleAddItem = async (data: {
		name: string;
		categoryId?: string;
		notes?: string;
	}) => {
		try {
			const response = await fetch("/api/grocery-items", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				// Refresh the items
				fetchGroceryItems();
			}
		} catch (error) {
			console.error("Error adding item:", error);
		}
	};

	// Add a new category
	const handleAddCategory = async (data: {
		name: string;
		parentId?: string;
		color?: string;
		icon?: string;
	}) => {
		try {
			const response = await fetch("/api/grocery-categories", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				// Refresh the categories
				fetchCategories();
			}
		} catch (error) {
			console.error("Error adding category:", error);
		}
	};

	return (
		<div className="w-full">
			<Tabs value={activeTab} onValueChange={setActiveTab}>
				<TabsList className="mb-4">
					<TabsTrigger value="items">Grocery List</TabsTrigger>
					<TabsTrigger value="categories">Manage Categories</TabsTrigger>
				</TabsList>

				<TabsContent value="items" className="space-y-4">
					{isLoading ? (
						<div className="text-center py-8">
							<p>Loading grocery items...</p>
						</div>
					) : (
						<CategoryList
							categories={categories}
							items={items}
							onToggleItem={handleToggleItem}
							onAddItem={handleAddItem}
						/>
					)}
				</TabsContent>

				<TabsContent value="categories">
					<CategoryManager
						categories={categories}
						onAddCategory={handleAddCategory}
					/>
				</TabsContent>
			</Tabs>
		</div>
	);
}
