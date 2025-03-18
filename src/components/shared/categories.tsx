"use client";

import { cn } from "@/lib/utils";
// import { useCategoryStore } from "@/store/category";
// import { Category } from "@prisma/client";
import React from "react";

interface CategoryProps {
    items: Category[];
 
  className?: string;
}

interface Category {
    id: number;
    name: string;
}

export const items = [{
    id: 1,
    name: "All"
},
    {
        id: 2,
        name: "Meat"
    },
    {
        id: 3,
        name: "Vegetarian"
    },
    {
        id: 4,
        name: "Spicy"
    },
    {
        id: 5,
        name: "Cheese"
}];
export const Categories: React.FC<CategoryProps> = ({ items, className }) => {
  //const activeId = useCategoryStore((state) => state.activeId);
  const activeId = 0;
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {items.map((category) => (
        <a
          key={category.id}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeId === category.id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${category.name}`}
        >
          {category.name}
        </a>
      ))}
    </div>
  );
};
