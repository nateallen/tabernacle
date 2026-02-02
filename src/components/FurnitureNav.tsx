"use client";

import { useState } from "react";
import Link from "next/link";
import { TabernacleFurniture } from "@/data/furniture";
import { cn } from "@/lib/utils";

interface FurnitureNavProps {
  items: TabernacleFurniture[];
  currentId: string;
}

export default function FurnitureNav({ items, currentId }: FurnitureNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentItem = items.find(item => item.id === currentId);

  return (
    <nav className="relative">
      {/* Mobile: Hamburger menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full py-3 text-left"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="font-medium text-foreground">
            {currentItem?.name || "Select Item"}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "h-5 w-5 text-muted-foreground transition-transform",
              isOpen && "rotate-180"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border border-border rounded-lg shadow-lg z-50 py-2 mt-1">
            {items.map((item) => {
              const isActive = currentId === item.id;
              const isAvailable = item.available;

              if (!isAvailable) {
                return (
                  <span
                    key={item.id}
                    className="block px-4 py-2.5 text-sm text-muted-foreground/50 cursor-not-allowed"
                  >
                    {item.name}
                    <span className="ml-1.5 text-xs opacity-60">(Coming Soon)</span>
                  </span>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={`/${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 text-sm transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-foreground hover:bg-secondary"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop: Horizontal tabs */}
      <div className="hidden md:flex overflow-x-auto scrollbar-hide py-2 -mx-4 px-4 gap-1">
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
      </div>
    </nav>
  );
}
