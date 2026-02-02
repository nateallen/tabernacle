"use client";

import Link from "next/link";
import { TabernacleFurniture } from "@/data/furniture";
import { cn } from "@/lib/utils";

interface FurnitureNavProps {
  items: TabernacleFurniture[];
  currentId: string;
}

export default function FurnitureNav({ items, currentId }: FurnitureNavProps) {
  return (
    <nav className="flex overflow-x-auto scrollbar-hide py-2 -mx-4 px-4 gap-1">
      {items.map((item) => {
        const isActive = currentId === item.id;
        const isAvailable = item.available;

        if (!isAvailable) {
          return (
            <span
              key={item.id}
              className={cn(
                "flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                "text-muted-foreground/50 cursor-not-allowed"
              )}
            >
              {item.name}
              <span className="ml-1.5 text-xs opacity-60">(Soon)</span>
            </span>
          );
        }

        return (
          <Link
            key={item.id}
            href={`/${item.id}`}
            className={cn(
              "flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
