"use client";

import { TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

interface GroceryDashboardTabsProps {
  activeTab: "list" | "summary" | "categories";
}

export function GroceryDashboardTabs({ activeTab }: GroceryDashboardTabsProps) {
  const router = useRouter();

  const handleTabChange = (value: string) => {
    router.push(`/dashboard/${value}`);
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange}>
      <TabsList className="mb-4">
        <TabsTrigger value="list">Grocery List</TabsTrigger>
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="categories">Manage Categories</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
