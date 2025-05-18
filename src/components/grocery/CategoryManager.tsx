"use client";

import { Button } from "@/components/ui/button";
import type { GroceryCategory } from "@/generated/prisma";
import { useUpdateGroceryCategory, useDeleteGroceryCategory } from "@/lib/api/grocery-api";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

// Extended type for categories with children
interface CategoryWithChildren extends GroceryCategory {
	children?: CategoryWithChildren[];
}

interface CategoryManagerProps {
	categories: GroceryCategory[];
	onAddCategory: (data: {
		name: string;
		parentId?: string;
		color?: string;
		icon?: string;
	}) => void;
}

// Predefined colors for categories
const CATEGORY_COLORS = [
	"#4caf50", // Green
	"#f5f5f5", // White
	"#ef5350", // Red
	"#d7ccc8", // Brown
	"#90caf9", // Blue
	"#ffcc80", // Orange
	"#81d4fa", // Light Blue
	"#ffb74d", // Light Orange
	"#b0bec5", // Gray
	"#ce93d8", // Purple
];

// Predefined icons for categories
const CATEGORY_ICONS = [
	"🥬",
	"🥛",
	"🥩",
	"🍞",
	"❄️",
	"🥫",
	"🧃",
	"🍿",
	"🧹",
	"🧴",
	"🍎",
	"🧀",
	"🍗",
	"🍰",
	"🍦",
	"🍝",
	"🍵",
	"🍪",
	"🧻",
	"🧼",
	"🎁", // Gift emoji
];

export function CategoryManager({
	categories,
	onAddCategory,
}: CategoryManagerProps) {
	const [isAdding, setIsAdding] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [newCategoryName, setNewCategoryName] = useState("");
	const [selectedParentId, setSelectedParentId] = useState<string | undefined>(
		undefined,
	);
	const [selectedColor, setSelectedColor] = useState(CATEGORY_COLORS[0]);
	const [selectedIcon, setSelectedIcon] = useState(CATEGORY_ICONS[0]);
	const [editingCategory, setEditingCategory] = useState<GroceryCategory | null>(null);
	
	// Use React Query mutations
	const updateCategoryMutation = useUpdateGroceryCategory();
	const deleteCategoryMutation = useDeleteGroceryCategory();

	// Get top-level categories (those without a parent)
	const topLevelCategories = categories.filter(
		(category) => !category.parentId,
	);

	// Get child categories for a given parent
	const getChildCategories = (parentId: string) => {
		return categories.filter((category) => category.parentId === parentId);
	};
	
	// Check if a category has children
	const hasChildren = (category: GroceryCategory | CategoryWithChildren) => {
		// First check if the category has a children property with items
		const categoryWithChildren = category as CategoryWithChildren;
		if (categoryWithChildren.children && categoryWithChildren.children.length > 0) {
			return true;
		}
		// Otherwise check if any category has this category as parent
		return categories.some(c => c.parentId === category.id);
	};

	// Handle adding a new category
	const handleAddCategory = (e: React.FormEvent) => {
		e.preventDefault();
		if (newCategoryName.trim()) {
			onAddCategory({
				name: newCategoryName.trim(),
				parentId: selectedParentId,
				color: selectedColor,
				icon: selectedIcon,
			});
			setNewCategoryName("");
			setIsAdding(false);
		}
	};
	
	// Handle updating a category
	const handleUpdateCategory = (e: React.FormEvent) => {
		e.preventDefault();
		if (editingCategory && newCategoryName.trim()) {
			updateCategoryMutation.mutate({
				id: editingCategory.id,
				name: newCategoryName.trim(),
				parentId: selectedParentId,
				color: selectedColor,
				icon: selectedIcon,
			});
			setNewCategoryName("");
			setEditingCategory(null);
			setIsEditing(false);
		}
	};
	
	// Start editing a category
	const startEditCategory = (category: GroceryCategory) => {
		setEditingCategory(category);
		setNewCategoryName(category.name);
		setSelectedParentId(category.parentId || undefined);
		setSelectedColor(category.color || CATEGORY_COLORS[0]);
		setSelectedIcon(category.icon || CATEGORY_ICONS[0]);
		setIsEditing(true);
		setIsAdding(false);
	};
	
	// Handle deleting a category
	const handleDeleteCategory = (categoryId: string) => {
		if (confirm("Are you sure you want to delete this category? This cannot be undone.")) {
			deleteCategoryMutation.mutate(categoryId);
		}
	};

	// Render a category and its children recursively
	const renderCategory = (category: GroceryCategory | CategoryWithChildren, depth = 0) => {
		// Get children either from the category.children property or by filtering
		const categoryWithChildren = category as CategoryWithChildren;
		let children = categoryWithChildren.children || [];
		if (!children.length) {
			children = getChildCategories(category.id);
		}
		const paddingLeft = `${depth * 1.5}rem`;

		return (
			<div key={category.id}>
				<div
					className="p-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
					style={{
						paddingLeft,
						borderLeft:
							depth > 0 ? `2px solid ${category.color || "#e2e8f0"}` : "none",
					}}
				>
					<div className="flex items-center">
						<span className="mr-2 text-xl">{category.icon}</span>
						<span className="font-medium">{category.name}</span>
						{category.isDefault && (
							<span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
								Default
							</span>
						)}
					</div>
					
					{/* Category actions */}
					<div className="flex space-x-2">
						<button
							type="button"
							className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
							onClick={() => startEditCategory(category)}
							aria-label={`Edit ${category.name}`}
						>
							<Pencil className="h-4 w-4" />
						</button>
						<button
							type="button"
							className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
							onClick={() => handleDeleteCategory(category.id)}
							aria-label={`Delete ${category.name}`}
						>
							<Trash2 className="h-4 w-4" />
						</button>
					</div>
				</div>

				{children.length > 0 && (
				<div className="ml-4">
					{children.map((child: GroceryCategory | CategoryWithChildren) => renderCategory(child, depth + 1))}
				</div>
			)}
			</div>
		);
	};

	return (
		<div className="w-full">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-bold">Grocery Categories</h2>
				{!isEditing ? (
					<Button
						onClick={() => setIsAdding(!isAdding)}
						variant={isAdding ? "outline" : "default"}
					>
						{isAdding ? "Cancel" : "Add Category"}
					</Button>
				) : (
					<Button
						onClick={() => {
							setIsEditing(false);
							setEditingCategory(null);
						}}
						variant="outline"
					>
						Cancel Edit
					</Button>
				)}
			</div>

			{(isAdding || isEditing) && (
				<form
					onSubmit={isEditing ? handleUpdateCategory : handleAddCategory}
					className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
				>
					<h3 className="text-lg font-medium mb-3">
						{isEditing ? `Edit Category: ${editingCategory?.name}` : "Add New Category"}
					</h3>
					<div className="space-y-4">
						<div>
							<label
								htmlFor="category-name"
								className="block text-sm font-medium mb-1"
							>
								Category Name
							</label>
							<input
								id="category-name"
								type="text"
								value={newCategoryName}
								onChange={(e) => setNewCategoryName(e.target.value)}
								placeholder="Enter category name"
								className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
								required
							/>
						</div>

						<div>
							<label
								htmlFor="parent-category"
								className="block text-sm font-medium mb-1"
							>
								Parent Category (Optional)
							</label>
							<select
								id="parent-category"
								value={selectedParentId || ""}
								onChange={(e) =>
									setSelectedParentId(e.target.value || undefined)
								}
								className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
							>
								<option value="">No Parent (Top Level)</option>
								{categories.map((category) => (
									<option key={category.id} value={category.id}>
										{category.icon} {category.name}
									</option>
								))}
							</select>
						</div>

						<div>
							<fieldset>
								<legend className="block text-sm font-medium mb-1">
									Color
								</legend>
								<div className="flex flex-wrap gap-2">
									{CATEGORY_COLORS.map((color) => (
										<div key={color} className="relative">
											<input
												type="radio"
												id={`color-${color}`}
												name="category-color"
												className="sr-only"
												checked={selectedColor === color}
												onChange={() => setSelectedColor(color)}
											/>
											<label
												htmlFor={`color-${color}`}
												className={`block w-8 h-8 rounded-full cursor-pointer ${selectedColor === color ? "ring-2 ring-blue-500" : ""}`}
												style={{ backgroundColor: color }}
												aria-label={`Select color ${color}`}
											/>
										</div>
									))}
								</div>
							</fieldset>
						</div>

						<div>
							<fieldset>
								<legend className="block text-sm font-medium mb-1">Icon</legend>
								<div className="flex flex-wrap gap-2">
									{CATEGORY_ICONS.map((icon) => (
										<div key={icon} className="relative">
											<input
												type="radio"
												id={`icon-${icon}`}
												name="category-icon"
												className="sr-only"
												checked={selectedIcon === icon}
												onChange={() => setSelectedIcon(icon)}
											/>
											<label
												htmlFor={`icon-${icon}`}
												className={`flex w-8 h-8 items-center justify-center rounded-md cursor-pointer ${selectedIcon === icon ? "bg-blue-100 dark:bg-blue-900" : "bg-gray-100 dark:bg-gray-700"}`}
												aria-label={`Select icon ${icon}`}
											>
												{icon}
											</label>
										</div>
									))}
								</div>
							</fieldset>
						</div>

						<div className="flex justify-end">
							<Button 
								type="submit" 
								disabled={!newCategoryName.trim() || 
									updateCategoryMutation.isPending || 
									deleteCategoryMutation.isPending}
							>
								{isEditing ? 
									(updateCategoryMutation.isPending ? "Updating..." : "Update Category") : 
									"Add Category"}
							</Button>
						</div>
					</div>
				</form>
			)}

			<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
				{topLevelCategories.length > 0 ? (
					<div className="space-y-1">
						{topLevelCategories.map((category) => renderCategory(category))}
					</div>
				) : (
					<p className="text-gray-500 text-center py-4">
						No categories found. Add your first category!
					</p>
				)}
			</div>
		</div>
	);
}
