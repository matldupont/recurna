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
      <TabsList className="mb-4 grid grid-cols-3">
        <TabsTrigger value="list">📋</TabsTrigger>
        <TabsTrigger value="summary">🛒</TabsTrigger>
        <TabsTrigger value="categories">🏷️</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
