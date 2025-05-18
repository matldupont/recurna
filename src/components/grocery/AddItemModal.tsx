"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import type { GroceryCategory } from "@/generated/prisma";
import { useState, useEffect } from "react";

interface AddItemModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAddItem: (data: { name: string; categoryId?: string }) => void;
  categories: GroceryCategory[];
  initialCategoryId?: string;
}

export function AddItemModal({
  isOpen,
  onOpenChange,
  onAddItem,
  categories,
  initialCategoryId
}: AddItemModalProps) {
  const [newItemName, setNewItemName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(initialCategoryId);

  // Update selected category when initialCategoryId changes
  useEffect(() => {
    setSelectedCategoryId(initialCategoryId);
  }, [initialCategoryId]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setNewItemName("");
    }
  }, [isOpen]);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemName.trim()) {
      onAddItem({
        name: newItemName.trim(),
        categoryId: selectedCategoryId,
      });
      setNewItemName("");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Item</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleAddItem} className="space-y-4">
          <div className="space-y-3">
            <div>
              <label htmlFor="item-name" className="block text-sm font-medium mb-1">Item Name</label>
              <input
                id="item-name"
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                required
                aria-label="Item name"
              />
            </div>
            <div>
              <label htmlFor="category-select" className="block text-sm font-medium mb-1">Category</label>
              <select
                id="category-select"
                value={selectedCategoryId || ""}
                onChange={(e) => setSelectedCategoryId(e.target.value || undefined)}
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                aria-label="Category"
              >
                <option value="">No Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={!newItemName.trim()}>Add Item</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
