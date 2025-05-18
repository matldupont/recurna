"use client";

import { Button } from "@/components/ui/button";
import type { GroceryCategory, GroceryItem as PrismaGroceryItem } from "@/generated/prisma";
import { useState } from "react";

// Extend the Prisma GroceryItem type to include the checked and notes properties
type GroceryItem = PrismaGroceryItem & { checked?: boolean; notes?: string };

interface CategoryListProps {
	categories: GroceryCategory[];
	items: {
		categorized: Record<string, GroceryItem[]>;
		uncategorized: GroceryItem[];
	};
	onToggleItem: (itemId: number) => void;
	onAddItem: (data: { name: string; categoryId?: string }) => void;
}

export function CategoryList({
	categories,
	items,
	onToggleItem,
	onAddItem,
}: CategoryListProps) {
	const [expandedCategories, setExpandedCategories] = useState<
		Record<string, boolean>
	>({});
	const [newItemName, setNewItemName] = useState("");
	const [selectedCategoryId, setSelectedCategoryId] = useState<
		string | undefined
	>(undefined);

	// Toggle category expansion
	const toggleCategory = (categoryId: string) => {
		setExpandedCategories((prev) => ({
			...prev,
			[categoryId]: !prev[categoryId],
		}));
	};

	// Handle adding a new item
	const handleAddItem = (e: React.FormEvent) => {
		e.preventDefault();
		if (newItemName.trim()) {
			onAddItem({
				name: newItemName.trim(),
				categoryId: selectedCategoryId,
			});
			setNewItemName("");
		}
	};

	return (
		<div className="w-full">
			{/* Add new item form */}
			<form
				onSubmit={handleAddItem}
				className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
			>
				<h3 className="text-lg font-medium mb-3">Add New Item</h3>
				<div className="flex flex-col sm:flex-row gap-3">
					<input
						type="text"
						value={newItemName}
						onChange={(e) => setNewItemName(e.target.value)}
						placeholder="Enter item name"
						className="flex-1 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
						required
						aria-label="Item name"
					/>
					<select
						value={selectedCategoryId || ""}
						onChange={(e) => setSelectedCategoryId(e.target.value || undefined)}
						className="p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
						aria-label="Category"
					>
						<option value="">No Category</option>
						{categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.icon} {category.name}
							</option>
						))}
					</select>
					<Button type="submit" disabled={!newItemName.trim()}>
						Add Item
					</Button>
				</div>
			</form>

			{/* Categories and items */}
			<div className="space-y-4">
				{categories?.map((category) => {
					const categoryItems = items?.categorized?.[category.id] || [];
					const isExpanded = expandedCategories?.[category.id] !== false; // Default to expanded

					return (
						<div
							key={category.id}
							className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
							style={{
								borderLeft: `4px solid ${category.color || "#e2e8f0"}`,
							}}
						>
							<button
								type="button"
								className="p-4 w-full flex justify-between items-center cursor-pointer bg-transparent border-none text-left"
								onClick={() => toggleCategory(category.id)}
								aria-expanded={isExpanded}
							>
								<div className="flex items-center">
									<span className="mr-2 text-xl">{category.icon}</span>
									<h3 className="font-medium">{category.name}</h3>
									<span className="ml-2 text-gray-500 text-sm">
										({categoryItems.length}{" "}
										{categoryItems.length === 1 ? "item" : "items"})
									</span>
								</div>
								<span className="text-gray-500">{isExpanded ? "▼" : "►"}</span>
							</button>

							{isExpanded && (
								<div className="px-4 pb-4">
									{categoryItems.length > 0 ? (
										<ul className="divide-y divide-gray-100 dark:divide-gray-700">
											{categoryItems.map((item) => (
												<li key={item.id} className="py-2 flex items-center">
													<input
														type="checkbox"
														id={`item-${item.id}`}
														checked={item.checked}
														onChange={() => onToggleItem(item.id)}
														className="mr-3 h-5 w-5"
													/>
													<label
														htmlFor={`item-${item.id}`}
														className={
															item.checked ? "line-through text-gray-500" : ""
														}
													>
														{item.name}{" "}
														{item.quantity > 1 && `(${item.quantity})`}
														{item.notes && (
															<span className="ml-2 text-sm text-gray-500">
																- {item.notes}
															</span>
														)}
													</label>
												</li>
											))}
										</ul>
									) : (
										<p className="text-gray-500 text-sm">
											No items in this category
										</p>
									)}
								</div>
							)}
						</div>
					);
				})}

				{/* Uncategorized items */}
				{items?.uncategorized?.length > 0 && (
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
						<div className="p-4">
							<h3 className="font-medium">Uncategorized</h3>
							<ul className="divide-y divide-gray-100 dark:divide-gray-700 mt-2">
								{items.uncategorized.map((item) => (
									<li key={item.id} className="py-2 flex items-center">
										<input
											type="checkbox"
											id={`uncategorized-item-${item.id}`}
											checked={item.checked}
											onChange={() => onToggleItem(item.id)}
											className="mr-3 h-5 w-5"
										/>
										<label
											htmlFor={`uncategorized-item-${item.id}`}
											className={
												item.checked ? "line-through text-gray-500" : ""
											}
										>
											{item.name} {item.quantity > 1 && `(${item.quantity})`}
											{item.notes && (
												<span className="ml-2 text-sm text-gray-500">
													- {item.notes}
												</span>
											)}
										</label>
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
