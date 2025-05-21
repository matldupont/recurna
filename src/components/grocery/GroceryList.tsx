"use client";

import type { GroceryCategory } from "@/generated/prisma";
import { 
  useGroceryItems, 
  useGroceryCategories, 
  useAddGroceryItem, 
  useToggleGroceryItem,
  useDeleteGroceryItem
} from "@/lib/api/grocery-api";
import { useState, useEffect } from "react";
import { CategoryList } from "./CategoryList";

interface GroceryListProps {
  userId: string;
  initialCategories?: GroceryCategory[];
}

export function GroceryList({ userId, initialCategories }: GroceryListProps) {
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

  if (isItemsLoading || isCategoriesLoading) {
    return (
      <div className="text-center py-8">
        <p>Loading grocery items...</p>
      </div>
    );
  }

  return (
    <CategoryList
      categories={categories}
      items={items || { categorized: {}, uncategorized: [] }}
      onToggleItem={handleToggleItem}
      onAddItem={handleAddItem}
      onDeleteItem={handleDeleteItem}
    />
  );
}
