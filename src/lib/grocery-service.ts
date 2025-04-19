import type { GroceryCategory, GroceryItem } from "../generated/prisma";
import { prisma } from "./db";

// Default grocery categories that will be suggested to users
const DEFAULT_CATEGORIES = [
	{ name: "Produce", color: "#4caf50", icon: "🥬" },
	{ name: "Dairy", color: "#f5f5f5", icon: "🥛" },
	{ name: "Meat & Seafood", color: "#ef5350", icon: "🥩" },
	{ name: "Bakery", color: "#d7ccc8", icon: "🍞" },
	{ name: "Frozen Foods", color: "#90caf9", icon: "❄️" },
	{ name: "Pantry", color: "#ffcc80", icon: "🥫" },
	{ name: "Beverages", color: "#81d4fa", icon: "🧃" },
	{ name: "Snacks", color: "#ffb74d", icon: "🍿" },
	{ name: "Household", color: "#b0bec5", icon: "🧹" },
	{ name: "Personal Care", color: "#ce93d8", icon: "🧴" },
];

/**
 * Get or create default grocery categories for a user
 * @param userId The user ID
 * @returns Array of grocery categories
 */
export async function getOrCreateDefaultCategories(
	userId: string,
): Promise<GroceryCategory[]> {
	// Check if user already has categories
	const existingCategories = await prisma.groceryCategory.findMany({
		where: { userId },
	});

	// If user already has categories, return them
	if (existingCategories.length > 0) {
		return existingCategories;
	}

	// Create default categories for the user
	const categories = await Promise.all(
		DEFAULT_CATEGORIES.map((category) =>
			prisma.groceryCategory.create({
				data: {
					...category,
					isDefault: true,
					userId,
				},
			}),
		),
	);

	return categories;
}

/**
 * Get all grocery categories for a user, organized in a hierarchical structure
 * @param userId The user ID
 * @returns Hierarchical array of grocery categories
 */
export async function getGroceryCategoriesHierarchy(
	userId: string,
): Promise<GroceryCategory[]> {
	// Get all categories for the user
	const allCategories = await prisma.groceryCategory.findMany({
		where: { userId },
		include: {
			items: true,
			children: {
				include: {
					items: true,
				},
			},
		},
	});

	// Filter to only top-level categories (those without a parent)
	const topLevelCategories = allCategories.filter(
		(category) => !category.parentId,
	);

	return topLevelCategories;
}

/**
 * Create a new grocery category
 * @param userId The user ID
 * @param data Category data
 * @returns The created category
 */
export async function createGroceryCategory(
	userId: string,
	data: {
		name: string;
		description?: string;
		color?: string;
		icon?: string;
		parentId?: string;
	},
): Promise<GroceryCategory> {
	return prisma.groceryCategory.create({
		data: {
			...data,
			userId,
		},
	});
}

/**
 * Get grocery items grouped by category
 * @param userId The user ID
 * @returns Object with items grouped by category
 */
export async function getGroceryItemsByCategory(userId: string): Promise<{
	categorized: Record<string, GroceryItem[]>;
	uncategorized: GroceryItem[];
}> {
	// Get all items for the user
	const items = await prisma.groceryItem.findMany({
		where: { userId },
		include: {
			category: true,
		},
		orderBy: {
			createdAt: "desc",
		},
	});

	// Group items by category
	const categorized: Record<string, GroceryItem[]> = {};
	const uncategorized: GroceryItem[] = [];

	for (const item of items) {
		if (item.categoryId) {
			if (!categorized[item.categoryId]) {
				categorized[item.categoryId] = [];
			}
			categorized[item.categoryId].push(item);
		} else {
			uncategorized.push(item);
		}
	}

	return { categorized, uncategorized };
}

/**
 * Add a grocery item
 * @param userId The user ID
 * @param data Item data
 * @returns The created item
 */
export async function addGroceryItem(
	userId: string,
	data: {
		name: string;
		quantity?: number;
		categoryId?: string;
		notes?: string;
	},
): Promise<GroceryItem> {
	return prisma.groceryItem.create({
		data: {
			name: data.name,
			quantity: data.quantity || 1,
			categoryId: data.categoryId,
			notes: data.notes,
			userId,
		},
	});
}

/**
 * Toggle the checked status of a grocery item
 * @param itemId The item ID
 * @param userId The user ID (for security check)
 * @returns The updated item
 */
export async function toggleGroceryItemChecked(
	itemId: number,
	userId: string,
): Promise<GroceryItem | null> {
	// Get the current item
	const item = await prisma.groceryItem.findFirst({
		where: {
			id: itemId,
			userId,
		},
	});

	if (!item) {
		return null;
	}

	// Toggle the checked status
	return prisma.groceryItem.update({
		where: { id: itemId },
		data: {
			checked: !item.checked,
		},
	});
}
