"use client";

import type { GroceryCategory } from "@/generated/prisma";
import { 
  useGroceryCategories, 
  useAddGroceryCategory 
} from "@/lib/api/grocery-api";
import { useState, useEffect } from "react";
import { CategoryManager } from "./CategoryManager";

interface CategoryManagerViewProps {
  userId: string;
  initialCategories?: GroceryCategory[];
}

export function CategoryManagerView({ userId, initialCategories }: CategoryManagerViewProps) {
  // Use React Query hooks
  const { 
    data: fetchedCategories,
    isLoading: isCategoriesLoading 
  } = useGroceryCategories();
  
  const addCategoryMutation = useAddGroceryCategory();
  
  // Use initialCategories if available, otherwise use fetched categories
  const [categories, setCategories] = useState<GroceryCategory[]>(initialCategories || []);
  
  // Update categories when fetched
  useEffect(() => {
    if (fetchedCategories) {
      setCategories(fetchedCategories);
    }
  }, [fetchedCategories]);

  // Handle adding a new category
  const handleAddCategory = (data: {
    name: string;
    parentId?: string;
    color?: string;
    icon?: string;
  }) => {
    addCategoryMutation.mutate(data);
  };

  if (isCategoriesLoading) {
    return (
      <div className="text-center py-8">
        <p>Loading categories...</p>
      </div>
    );
  }

  return (
    <CategoryManager
      categories={categories}
      onAddCategory={handleAddCategory}
    />
  );
}
