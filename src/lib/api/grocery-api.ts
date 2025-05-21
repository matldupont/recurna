'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { GroceryCategory, GroceryItem } from '@/generated/prisma';

// Query keys
export const QUERY_KEYS = {
  groceryItems: 'groceryItems',
  groceryCategories: 'groceryCategories',
  uniqueItemNames: 'uniqueItemNames',
};

// API functions
const fetchGroceryItems = async (groupByCategory = true) => {
  const response = await fetch(`/api/grocery-items?groupByCategory=${groupByCategory}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch grocery items');
  }
  
  return response.json();
};

const fetchGroceryCategories = async (hierarchical = true) => {
  // Always use hierarchical=true to ensure we get the full category structure
  const response = await fetch('/api/grocery-categories?hierarchical=true');
  
  if (!response.ok) {
    throw new Error('Failed to fetch grocery categories');
  }
  
  return response.json();
};

const addGroceryItem = async (data: { 
  name: string; 
  categoryId?: string;
  quantity?: number;
  notes?: string;
}) => {
  const response = await fetch('/api/grocery-items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to add grocery item');
  }
  
  return response.json();
};

const toggleGroceryItem = async (itemId: number) => {
  const response = await fetch('/api/grocery-items', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: itemId,
      action: 'toggle',
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to toggle grocery item');
  }
  
  return response.json();
};

const deleteGroceryItem = async (itemId: number) => {
  const response = await fetch(`/api/grocery-items/${itemId}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete grocery item');
  }
  
  return response.json();
};

const addGroceryCategory = async (data: { 
  name: string; 
  parentId?: string; 
  color?: string; 
  icon?: string;
}) => {
  const response = await fetch('/api/grocery-categories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to add grocery category');
  }
  
  return response.json();
};

const updateGroceryCategory = async (data: {
  id: string;
  name?: string;
  parentId?: string;
  color?: string;
  icon?: string;
}) => {
  const response = await fetch('/api/grocery-categories', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update grocery category');
  }
  
  return response.json();
};

const deleteGroceryCategory = async (id: string) => {
  const response = await fetch(`/api/grocery-categories/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete grocery category');
  }
  
  return response.json();
};

const fetchUniqueItemNames = async () => {
  const response = await fetch('/api/grocery-items/unique-names');
  
  if (!response.ok) {
    throw new Error('Failed to fetch unique item names');
  }
  
  return response.json();
};

// React Query hooks
export function useGroceryItems(groupByCategory = true) {
  return useQuery({
    queryKey: [QUERY_KEYS.groceryItems, { groupByCategory }],
    queryFn: () => fetchGroceryItems(groupByCategory),
  });
}

export function useGroceryCategories(hierarchical = true) {
  return useQuery({
    queryKey: [QUERY_KEYS.groceryCategories, { hierarchical }],
    queryFn: () => fetchGroceryCategories(hierarchical),
  });
}

export function useAddGroceryItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: addGroceryItem,
    onSuccess: () => {
      // Invalidate grocery items query to refetch data
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.groceryItems] });
    },
  });
}

export function useToggleGroceryItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: toggleGroceryItem,
    onSuccess: () => {
      // Invalidate grocery items query to refetch data
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.groceryItems] });
    },
  });
}

export function useDeleteGroceryItem() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteGroceryItem,
    onSuccess: () => {
      // Invalidate grocery items query to refetch data
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.groceryItems] });
      // Also invalidate unique item names to update autocomplete suggestions
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.uniqueItemNames] });
    },
  });
}

export function useAddGroceryCategory() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: addGroceryCategory,
    onSuccess: () => {
      // Invalidate grocery categories query to refetch data
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.groceryCategories] });
    },
  });
}

export function useUpdateGroceryCategory() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateGroceryCategory,
    onSuccess: () => {
      // Invalidate grocery categories query to refetch data
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.groceryCategories] });
    },
  });
}

export function useDeleteGroceryCategory() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteGroceryCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.groceryCategories] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.groceryItems] });
    },
  });
}

export function useUniqueItemNames() {
  return useQuery({
    queryKey: [QUERY_KEYS.uniqueItemNames],
    queryFn: fetchUniqueItemNames,
  });
}
