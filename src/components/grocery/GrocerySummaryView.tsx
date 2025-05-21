"use client";

import type { GroceryCategory } from "@/generated/prisma";
import { 
  useGroceryItems, 
  useGroceryCategories, 
  useAddGroceryItem, 
  useToggleGroceryItem 
} from "@/lib/api/grocery-api";
import { useState, useEffect } from "react";
import { GrocerySummary } from "./GrocerySummary";

interface GrocerySummaryViewProps {
  userId: string;
  initialCategories?: GroceryCategory[];
}

export function GrocerySummaryView({ userId, initialCategories }: GrocerySummaryViewProps) {
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
        <p>Loading grocery summary...</p>
      </div>
    );
  }

  return (
    <GrocerySummary
      categories={categories}
      items={items || { categorized: {}, uncategorized: [] }}
      onToggleItem={handleToggleItem}
      onAddItem={handleAddItem}
    />
  );
}
