"use client";

import { TabernacleFurniture } from "@/data/furniture";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FurnitureSelectorProps {
  items: TabernacleFurniture[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function FurnitureSelector({
  items,
  selectedId,
  onSelect,
}: FurnitureSelectorProps) {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-foreground mb-3">
        Tabernacle Furniture
      </h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Button
            key={item.id}
            onClick={() => item.available && onSelect(item.id)}
            disabled={!item.available}
            variant={selectedId === item.id ? "default" : "secondary"}
            size="sm"
            className={
              selectedId === item.id
                ? "bg-amber-600 hover:bg-amber-700"
                : item.available
                ? "bg-amber-100 text-amber-800 hover:bg-amber-200"
                : ""
            }
          >
            {item.name}
            {!item.available && (
              <Badge variant="outline" className="ml-1 text-xs">
                Soon
              </Badge>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
}
