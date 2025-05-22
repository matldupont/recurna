"use client";

import type { GroceryCategory } from "@/generated/prisma";
import { 
	useGroceryItems, 
	useGroceryCategories, 
	useAddGroceryItem, 
	useToggleGroceryItem, 
	useAddGroceryCategory,
	useDeleteGroceryItem,
	useUpdateGroceryItem
} from "@/lib/api/grocery-api";
import { useState, useEffect } from "react";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "../../components/ui/tabs";
import { CategoryList } from "./CategoryList";
import { CategoryManager } from "./CategoryManager";
import { GrocerySummary } from "./GrocerySummary";

interface GroceryDashboardProps {
	userId: string;
	initialCategories?: GroceryCategory[];
}

export function GroceryDashboard({ userId, initialCategories }: GroceryDashboardProps) {
	const [activeTab, setActiveTab] = useState("items");
	
	// Use React Query hooks
	const { 
		data: items, 
		isLoading: isItemsLoading 
	} = useGroceryItems();
	
	const { 
		data: fetchedCategories,
		isLoading: isCategoriesLoading 
	} = useGroceryCategories();
	
	const addItemMutation = useAddGroceryItem();
	const toggleItemMutation = useToggleGroceryItem();
	const deleteItemMutation = useDeleteGroceryItem();
	const updateItemMutation = useUpdateGroceryItem();
	const addCategoryMutation = useAddGroceryCategory();
	
	// Use initialCategories if available, otherwise use fetched categories
	const [categories, setCategories] = useState<GroceryCategory[]>(initialCategories || []);
	
	// Update categories when fetched
	useEffect(() => {
		if (fetchedCategories) {
			setCategories(fetchedCategories);
		}
	}, [fetchedCategories]);

	// Handle toggling an item's checked status
	const handleToggleItem = (itemId: number) => {
		toggleItemMutation.mutate(itemId);
	};

	// Handle deleting a grocery item
	const handleDeleteItem = (itemId: number) => {
		deleteItemMutation.mutate(itemId);
	};

	// Handle adding a new grocery item
	const handleAddItem = (data: {
		name: string;
		categoryId?: string;
		notes?: string;
	}) => {
		addItemMutation.mutate(data);
	};

	// Handle editing an existing grocery item
	const handleEditItem = (data: {
		id: number;
		name: string;
		categoryId?: string;
	}) => {
		updateItemMutation.mutate(data);
	};

	// Handle adding a new category
	const handleAddCategory = (data: {
		name: string;
		parentId?: string;
		color?: string;
		icon?: string;
	}) => {
		addCategoryMutation.mutate(data);
	};

	return (
		<div className="w-full">
			<Tabs value={activeTab} onValueChange={setActiveTab}>
				<TabsList className="mb-4">
					<TabsTrigger value="items">Grocery List</TabsTrigger>
					<TabsTrigger value="summary">Summary</TabsTrigger>
					<TabsTrigger value="categories">Manage Categories</TabsTrigger>
				</TabsList>

				<TabsContent value="items" className="space-y-4">
					{isItemsLoading ? (
						<div className="text-center py-8">
							<p>Loading grocery items...</p>
						</div>
					) : (
						<CategoryList
							categories={categories}
							items={items || { categorized: {}, uncategorized: [] }}
							onToggleItem={handleToggleItem}
							onAddItem={handleAddItem}
							onDeleteItem={handleDeleteItem}
							onEditItem={handleEditItem}
						/>
					)}
				</TabsContent>

				<TabsContent value="summary" className="space-y-4">
					{isItemsLoading ? (
						<div className="text-center py-8">
							<p>Loading grocery summary...</p>
						</div>
					) : (
						<GrocerySummary
							categories={categories}
							items={items || { categorized: {}, uncategorized: [] }}
							onToggleItem={handleToggleItem}
							onAddItem={handleAddItem}
						/>
					)}
				</TabsContent>

				<TabsContent value="categories">
					{isCategoriesLoading ? (
						<div className="text-center py-8">
							<p>Loading categories...</p>
						</div>
					) : (
						<CategoryManager
							categories={categories}
							onAddCategory={handleAddCategory}
						/>
					)}
				</TabsContent>
			</Tabs>
		</div>
	);
}
