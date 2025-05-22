"use client";

import { Button } from "@/components/ui/button";
import type { GroceryCategory, GroceryItem as PrismaGroceryItem } from "@/generated/prisma";
import { useState } from "react";
import { Plus } from "lucide-react";
import { AddItemModal } from "./AddItemModal";
import clsx from "clsx";

// Extend the Prisma GroceryItem type to include the checked and notes properties
type GroceryItem = PrismaGroceryItem & { checked?: boolean; notes?: string };

// Extend the GroceryCategory type to include children for hierarchical structure
type CategoryWithChildren = GroceryCategory & {
	children?: CategoryWithChildren[];
};

interface GrocerySummaryProps {
	categories: CategoryWithChildren[];
	items: {
		categorized: Record<string, GroceryItem[]>;
		uncategorized: GroceryItem[];
	};
	onToggleItem: (itemId: number) => void;
	onAddItem: (data: { name: string; categoryId?: string }) => void;
}

// Recursive component to render a category and its children in a condensed view
function CategoryItem({
	category,
	items,
	expandedCategories,
	toggleCategory,
	onToggleItem,
	openAddItemModal,
	level = 0,
	isChild = false,
}: {
	category: CategoryWithChildren;
	items: {
		categorized: Record<string, GroceryItem[]>;
		uncategorized: GroceryItem[];
	};
	expandedCategories: Record<string, boolean>;
	toggleCategory: (categoryId: string) => void;
	onToggleItem: (itemId: number) => void;
	openAddItemModal: (categoryId?: string) => void;
	level: number;
	isChild?: boolean;
}) {
	const categoryItems = items?.categorized?.[category.id] || [];
	const isExpanded = expandedCategories?.[category.id] === true; // Default to collapsed
	const hasChildren = category.children && category.children.length > 0;
	
	// Count unchecked items
	const uncheckedItems = categoryItems.filter(item => !item.checked);
	const uncheckedCount = uncheckedItems.length;
	const totalCount = categoryItems.length;
	
	// Items to display based on expanded state
	const displayItems = isExpanded ? categoryItems : uncheckedItems;

	// Skip rendering if no items to display in collapsed state
	if (!isExpanded && uncheckedCount === 0 && !hasChildren) {
		return null;
	}

	return (
		<div
			className={clsx("bg-white dark:bg-gray-800 rounded-lg  overflow-hidden mb-1", isChild ? "" : "shadow-sm")}
			style={{
				borderLeft: !isChild ? `4px solid ${category.color || "#e2e8f0"}` : "none",
				marginLeft: level > 0 ? `${level * 16}px` : '0',
				backgroundColor: category.color ? `${category.color}20` : "inherit",

			}}
		>
			<div className={clsx("flex justify-between items-center", isChild ? "pr-3" : "py-2 px-3")}>
				<button
					type="button"
					className="flex-1 flex items-center cursor-pointer bg-transparent border-none text-left"
					onClick={() => toggleCategory(category.id)}
					aria-expanded={isExpanded}
				>
					<div className="flex items-center">
						<span className="mr-2">{category.icon}</span>
						<h3 className="font-medium text-sm">{category.name}</h3>
						<span className="ml-2 text-gray-500 text-xs">
							({uncheckedCount}/{totalCount})
						</span>
					</div>
					<span className="text-gray-500 ml-2 text-xs">{isExpanded ? "▼" : "►"}</span>
				</button>
				<Button 
					variant="ghost" 
					size="sm" 
					onClick={(e) => {
						e.stopPropagation();
						openAddItemModal(category.id);
					}}
					className="ml-1 h-6 w-6 p-0"
				>
					<Plus className="h-3 w-3" />
				</Button>
			</div>

			{isExpanded && displayItems.length > 0 && (
				<div className="px-3 pb-2">
					{/* Category items */}
					<ul className="space-y-1">
						{displayItems.map((item: GroceryItem) => (
							<li key={item.id} className="flex items-center text-sm py-1">
								<input
									type="checkbox"
									id={`summary-item-${item.id}`}
									checked={item.checked}
									onChange={() => onToggleItem(item.id)}
									className="mr-2 h-4 w-4"
								/>
								<label
									htmlFor={`summary-item-${item.id}`}
									className={
										item.checked ? "line-through text-gray-500" : ""
									}
								>
									{item.name}
									{item.quantity > 1 && ` (${item.quantity})`}
								</label>
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Show unchecked items when collapsed */}
			{!isExpanded && uncheckedItems.length > 0 && (
				<div className="px-3 pb-2">
					<ul className="space-y-1">
						{uncheckedItems.map((item: GroceryItem) => (
							<li key={item.id} className="flex items-center text-sm py-1">
								<input
									type="checkbox"
									id={`summary-item-${item.id}`}
									checked={false}
									onChange={() => onToggleItem(item.id)}
									className="mr-2 h-4 w-4"
								/>
								<label htmlFor={`summary-item-${item.id}`}>
									{item.name}
									{item.quantity > 1 && ` (${item.quantity})`}
								</label>
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Child categories - only if they have unchecked items */}
			{hasChildren && (
				<div className="mt-1">
					{category.children
						?.filter(childCategory => hasUncheckedItems(childCategory, items))
						.map((childCategory) => (
						<CategoryItem
							key={childCategory.id}
							category={childCategory}
							items={items}
							expandedCategories={expandedCategories}
							toggleCategory={toggleCategory}
							onToggleItem={onToggleItem}
							openAddItemModal={openAddItemModal}
							level={level + 1}
							isChild
						/>
					))}
				</div>
			)}
		</div>
	);
}

// Helper function to check if a category has any unchecked items (directly or in children)
function hasUncheckedItems(
	category: CategoryWithChildren,
	items: {
		categorized: Record<string, GroceryItem[]>;
		uncategorized: GroceryItem[];
	},
	checkedCategories: Set<string> = new Set()
): boolean {
	// Avoid infinite recursion by tracking checked categories
	if (checkedCategories.has(category.id)) {
		return false;
	}
	checkedCategories.add(category.id);

	// Check if this category has any unchecked items
	const categoryItems = items.categorized[category.id] || [];
	if (categoryItems.some(item => !item.checked)) {
		return true;
	}

	// Check if any child categories have unchecked items
	// Use the children property from CategoryWithChildren type
	const childCategories = category.children || [];
	if (childCategories.length > 0) {
		for (const childCategory of childCategories) {
			if (hasUncheckedItems(childCategory, items, checkedCategories)) {
				return true;
			}
		}
	}

	return false;
}

export function GrocerySummary({
	categories,
	items,
	onToggleItem,
	onAddItem,
}: GrocerySummaryProps) {
	// Initialize with all categories collapsed by default
	const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
		// Set uncategorized to collapsed by default
		uncategorized: false
	});
	const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>();
	const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
	
	// Create a virtual category for uncategorized items
	const uncategorizedCategory: GroceryCategory = {
		id: 'uncategorized',
		name: 'Uncategorized',
		userId: '',
		createdAt: new Date(),
		updatedAt: new Date(),
		description: null,
		color: null,
		icon: null,
		isDefault: false,
		parentId: null
	};
	const [modalCategoryId, setModalCategoryId] = useState<string | undefined>(undefined);

	// Toggle category expansion
	const toggleCategory = (categoryId: string) => {
		setExpandedCategories((prev) => ({
			...prev,
			[categoryId]: !prev[categoryId],
		}));
	};

	// Open modal with a specific category pre-selected
	const openAddItemModal = (categoryId?: string) => {
		setModalCategoryId(categoryId);
		setIsAddItemModalOpen(true);
	};

	// Count total unchecked items
	const countUncheckedItems = () => {
		let count = 0;
		
		// Count from categorized items
		for (const categoryItems of Object.values(items.categorized)) {
			count += categoryItems.filter(item => !item.checked).length;
		}
		
		// Count from uncategorized items
		count += items.uncategorized.filter(item => !item.checked).length;
		
		return count;
	};
	
	const uncheckedCount = countUncheckedItems();



	return (
		<div className="w-full">
			{/* Add Item Modal */}
			<AddItemModal 
				isOpen={isAddItemModalOpen}
				onOpenChange={setIsAddItemModalOpen}
				onAddItem={onAddItem}
				categories={categories}
				initialCategoryId={modalCategoryId}
			/>

			{/* Summary Header */}
			<div className="mb-3 flex justify-between items-center">
				<h2 className="text-lg font-medium">
					Grocery Summary
					<span className="ml-2 text-sm font-normal text-gray-500">
						({uncheckedCount} item{uncheckedCount !== 1 ? 's' : ''} remaining)
					</span>
				</h2>
				<Button 
					variant="outline" 
					size="sm" 
					onClick={() => openAddItemModal()} 
					className="flex items-center gap-1"
				>
					<Plus className="h-3 w-3" /> Add
				</Button>
			</div>

			{/* Categories and items */}
			<div className="flex flex-col gap-y-2">
				{/* Render categories recursively - only if they have unchecked items */}
				{categories?.filter(category => 
					hasUncheckedItems(category, items)
				).map((category) => (
					<CategoryItem
						key={category.id}
						category={category}
						items={items}
						expandedCategories={expandedCategories}
						toggleCategory={toggleCategory}
						onToggleItem={onToggleItem}
						openAddItemModal={openAddItemModal}
						level={0}
					/>
				))}

				{/* Uncategorized items - only if there are unchecked items */}
				{items?.uncategorized?.some(item => !item.checked) && (
					<CategoryItem
						category={uncategorizedCategory}
						items={{
							categorized: { uncategorized: items.uncategorized },
							uncategorized: []
						}}
						expandedCategories={expandedCategories}
						toggleCategory={toggleCategory}
						onToggleItem={onToggleItem}
						openAddItemModal={openAddItemModal}
						level={0}
					/>
				)}
			</div>
		</div>
	);
}
