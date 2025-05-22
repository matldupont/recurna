"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import type { GroceryCategory, GroceryItem as PrismaGroceryItem } from "@/generated/prisma";
import { useState } from "react";
import { Plus } from "lucide-react";
import { AddItemModal } from "./AddItemModal";

// Extend the Prisma GroceryItem type to include the checked and notes properties
type GroceryItem = PrismaGroceryItem & { checked?: boolean; notes?: string };

// Extend the GroceryCategory type to include children for hierarchical structure
type CategoryWithChildren = GroceryCategory & {
	children?: CategoryWithChildren[];
};

interface CategoryListProps {
	categories: CategoryWithChildren[];
	items: {
		categorized: Record<string, GroceryItem[]>;
		uncategorized: GroceryItem[];
	};
	onToggleItem: (itemId: number) => void;
	onAddItem: (data: { name: string; categoryId?: string }) => void;
	onDeleteItem: (itemId: number) => void;
	onEditItem: (data: { id: number; name: string; categoryId?: string }) => void;
}

// Recursive component to render a category and its children
function CategoryItem({
	category,
	items,
	expandedCategories,
	toggleCategory,
	onToggleItem,
	onDeleteItem,
	onEditItem,
	openAddItemModal,
	openEditItemModal,
	level = 0,
}: {
	category: CategoryWithChildren;
	items: {
		categorized: Record<string, GroceryItem[]>;
		uncategorized: GroceryItem[];
	};
	expandedCategories: Record<string, boolean>;
	toggleCategory: (categoryId: string) => void;
	onToggleItem: (itemId: number) => void;
	onDeleteItem: (itemId: number) => void;
	onEditItem: (data: { id: number; name: string; categoryId?: string }) => void;
	openAddItemModal: (categoryId?: string) => void;
	openEditItemModal: (item: GroceryItem, categoryId?: string) => void;
	level: number;
}) {
	const categoryItems = items?.categorized?.[category.id] || [];
	const isExpanded = expandedCategories?.[category.id] !== false; // Default to expanded
	const hasChildren = category.children && category.children.length > 0;

	return (
		<div
			className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden mb-2"
			style={{
				borderLeft: `4px solid ${category.color || "#e2e8f0"}`,
				marginLeft: level > 0 ? `${level * 20}px` : '0',
			}}
		>
			<div className="p-4 flex justify-between items-center">
				<button
					type="button"
					className="flex-1 flex items-center cursor-pointer bg-transparent border-none text-left"
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
						{hasChildren && (
							<span className="ml-2 text-xs text-gray-500">
								({category.children?.length}{" "}
								{category.children?.length === 1 ? "subcategory" : "subcategories"})
							</span>
						)}
					</div>
					<span className="text-gray-500 ml-2">{isExpanded ? "▼" : "►"}</span>
				</button>
				<Button 
					variant="ghost" 
					size="sm" 
					onClick={(e) => {
						e.stopPropagation();
						openAddItemModal(category.id);
					}}
					className="ml-2"
				>
					<Plus className="h-4 w-4" />
				</Button>
			</div>

			{isExpanded && (
				<div className="px-4 pb-4">
					{/* Category items */}
					{categoryItems.length > 0 ? (
						<ul className="divide-y divide-gray-100 dark:divide-gray-700">
							{categoryItems.map((item) => (
								<li key={item.id} className="py-2 flex items-center justify-between">
									<div className="flex items-center flex-1">
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
									</div>
									<div className="flex items-center">
										<button
											type="button"
											className="text-blue-500 hover:text-blue-700 ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
											onClick={() => openEditItemModal(item, category.id)}
											aria-label={`Edit ${item.name}`}
										>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<title>Edit item</title>
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
											</svg>
										</button>
										<button
											type="button"
											className="text-red-500 hover:text-red-700 ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
											onClick={() => onDeleteItem(item.id)}
											aria-label={`Delete ${item.name}`}
										>
											<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<title>Delete item</title>
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
											</svg>
										</button>
									</div>
								</li>
							))}
						</ul>
					) : (
						<p className="text-gray-500 text-sm mb-2">
							No items in this category
						</p>
					)}

					{/* Child categories */}
					{hasChildren && (
						<div className="mt-4">
							{category.children?.map((childCategory) => (
								<CategoryItem
									key={childCategory.id}
									category={childCategory}
									items={items}
									expandedCategories={expandedCategories}
									toggleCategory={toggleCategory}
									onToggleItem={onToggleItem}
									onDeleteItem={onDeleteItem}
									onEditItem={onEditItem}
									openAddItemModal={openAddItemModal}
									openEditItemModal={openEditItemModal}
									level={level + 1}
								/>
							))}
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export function CategoryList({
	categories,
	items,
	onToggleItem,
	onAddItem,
	onDeleteItem,
	onEditItem,
}: CategoryListProps) {
	const [expandedCategories, setExpandedCategories] = useState<
		Record<string, boolean>
	>({});
	const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
	const [isEditItemModalOpen, setIsEditItemModalOpen] = useState(false);
	const [modalCategoryId, setModalCategoryId] = useState<string | undefined>(undefined);
	const [editItem, setEditItem] = useState<{ id: number; name: string; categoryId?: string } | undefined>(undefined);

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

	// Open edit modal with item data
	const openEditItemModal = (item: GroceryItem, categoryId?: string) => {
		setEditItem({
			id: item.id,
			name: item.name,
			categoryId: categoryId,
		});
		setModalCategoryId(categoryId);
		setIsEditItemModalOpen(true);
	};

	return (
		<div className="w-full">
			{/* Add Item Modal */}
			<AddItemModal 
				isOpen={isAddItemModalOpen}
				onOpenChange={setIsAddItemModalOpen}
				onAddItem={onAddItem}
				categories={categories}
				initialCategoryId={modalCategoryId}
				mode="add"
			/>

			{/* Edit Item Modal */}
			<AddItemModal 
				isOpen={isEditItemModalOpen}
				onOpenChange={setIsEditItemModalOpen}
				onAddItem={onAddItem}
				onEditItem={onEditItem}
				categories={categories}
				initialCategoryId={modalCategoryId}
				editItem={editItem}
				mode="edit"
			/>

			{/* Add Item Button (Global) */}
			<div className="mb-6 flex justify-end">
				<Button onClick={() => openAddItemModal()} className="flex items-center gap-1">
					<Plus className="h-4 w-4" /> Add Item
				</Button>
			</div>

			{/* Categories and items */}
			<div className="space-y-4">
				{/* Render categories recursively */}
				{categories?.map((category) => (
					<CategoryItem
						key={category.id}
						category={category}
						items={items}
						expandedCategories={expandedCategories}
						toggleCategory={toggleCategory}
						onToggleItem={onToggleItem}
						onDeleteItem={onDeleteItem}
						onEditItem={onEditItem}
						openAddItemModal={openAddItemModal}
						openEditItemModal={openEditItemModal}
						level={0}
					/>
				))}


				{/* Uncategorized items */}
				{items.uncategorized.length > 0 && (
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden mb-4">
						<div className="p-4 flex justify-between items-center">
							<h3 className="font-medium">
								Uncategorized
								<span className="ml-2 text-gray-500 text-sm">
									({items.uncategorized.length}{" "}
									{items.uncategorized.length === 1 ? "item" : "items"})
								</span>
							</h3>
							<Button 
								variant="ghost" 
								size="sm" 
								onClick={() => openAddItemModal()}
								className="ml-2"
							>
								<Plus className="h-4 w-4" />
							</Button>
						</div>
						<div className="px-4 pb-4">
							<ul className="divide-y divide-gray-100 dark:divide-gray-700">
								{items.uncategorized.map((item) => (
									<li key={item.id} className="py-2 flex items-center justify-between">
										<div className="flex items-center flex-1">
											<input
												type="checkbox"
												id={`item-uncategorized-${item.id}`}
												checked={item.checked}
												onChange={() => onToggleItem(item.id)}
												className="mr-3 h-5 w-5"
											/>
											<label
												htmlFor={`item-uncategorized-${item.id}`}
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
										</div>
										<div className="flex items-center">
											<button
												type="button"
												className="text-blue-500 hover:text-blue-700 ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
												onClick={() => openEditItemModal(item)}
												aria-label={`Edit ${item.name}`}
											>
												<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<title>Edit item</title>
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
												</svg>
											</button>
											<button
												type="button"
												className="text-red-500 hover:text-red-700 ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
												onClick={() => onDeleteItem(item.id)}
												aria-label={`Delete ${item.name}`}
											>
												<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<title>Delete item</title>
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
												</svg>
											</button>
										</div>
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
