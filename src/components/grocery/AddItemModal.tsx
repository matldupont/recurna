"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import type { GroceryCategory as PrismaGroceryCategory } from "@/generated/prisma";

// Extended type to include children for hierarchical structure
interface GroceryCategory extends PrismaGroceryCategory {
  children?: GroceryCategory[];
}
import { useState, useEffect, useRef } from "react";
import { useUniqueItemNames } from "@/lib/api/grocery-api";

interface AddItemModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAddItem: (data: { name: string; categoryId?: string }) => void;
  onEditItem?: (data: { id: number; name: string; categoryId?: string }) => void;
  categories: GroceryCategory[];
  initialCategoryId?: string;
  editItem?: { id: number; name: string; categoryId?: string };
  mode?: 'add' | 'edit';
}

export function AddItemModal({
  isOpen,
  onOpenChange,
  onAddItem,
  onEditItem,
  categories,
  initialCategoryId,
  editItem,
  mode = 'add'
}: AddItemModalProps) {
  const [newItemName, setNewItemName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(initialCategoryId);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Fetch unique item names for autocomplete
  const { data: uniqueItemNames = [] } = useUniqueItemNames();

  // Update selected category when initialCategoryId changes
  useEffect(() => {
    setSelectedCategoryId(initialCategoryId);
  }, [initialCategoryId]);

  // Initialize form with edit item data or reset when modal opens
  useEffect(() => {
    if (isOpen) {
      if (mode === 'edit' && editItem) {
        setNewItemName(editItem.name);
        setSelectedCategoryId(editItem.categoryId);
      } else {
        setNewItemName("");
      }
      setShowSuggestions(false);
    }
  }, [isOpen, mode, editItem]);

  // Handle clicks outside the suggestions dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter suggestions based on input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setNewItemName(userInput);

    // Filter suggestions
    if (userInput.trim()) {
      const filtered = uniqueItemNames.filter(
        (name: string) => name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setNewItemName(suggestion);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  // Recursive function to render category options with proper indentation
  const renderCategoryOptions = (categories: GroceryCategory[], depth = 0): React.ReactElement[] => {
    return categories.flatMap((category) => {
      const hasChildren = category.children && category.children.length > 0;
      const indent = '\u00A0\u00A0'.repeat(depth); // Non-breaking spaces for indentation
      
      return [
        <option key={category.id} value={category.id}>
          {indent}{category.icon} {category.name}
        </option>,
        // Recursively render children if they exist
        ...(hasChildren && category.children ? renderCategoryOptions(category.children, depth + 1) : [])
      ];
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemName.trim()) {
      if (mode === 'edit' && editItem && onEditItem) {
        onEditItem({
          id: editItem.id,
          name: newItemName.trim(),
          categoryId: selectedCategoryId,
        });
      } else {
        onAddItem({
          name: newItemName.trim(),
          categoryId: selectedCategoryId,
        });
      }
      setNewItemName("");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{mode === 'edit' ? 'Edit Item' : 'Add New Item'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <div className="relative">
              <label htmlFor="item-name" className="block text-sm font-medium mb-1">Item Name</label>
              <input
                id="item-name"
                type="text"
                value={newItemName}
                onChange={handleInputChange}
                placeholder="Enter item name"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                required
                aria-label="Item name"
                ref={inputRef}
                autoComplete="off"
              />
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div 
                  className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto"
                  ref={suggestionsRef}
                >
                  <ul className="py-1" role="menu" aria-label="Suggestions">
                    {filteredSuggestions.map((suggestion) => (
                      <button
                        key={`suggestion-${suggestion}`}
                        className="w-full text-left px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => handleSuggestionClick(suggestion)}
                        type="button"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </ul>
                </div>
              )}
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
                {renderCategoryOptions(categories)}
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={!newItemName.trim()}>
              {mode === 'edit' ? 'Save Changes' : 'Add Item'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
