"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ListTodo, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface TodoItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export const TodoItem = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: TodoItemProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const routes = [
    {
      label: "Todo Boards",
      icon: <ListTodo className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}`,
    },
    {
      label: "Todo Activity",
      icon: <Activity className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/activity`,
    },
  ];

  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger className="flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline">
        <div className="flex items-center gap-x-2">
          <div className="w-5 h-5 relativer">
            <Image
              src="/checklist.svg"
              alt="checklist"
              width={24}
              height={24}
            />
          </div>
          <span className="font-medium text-sm">Todo</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {routes.map((route) => (
          <Button
            key={route.href}
            size="sm"
            onClick={() => onClick(route.href)}
            className={cn(
              "w-full font-normal justify-start pl-10 mb-1",
              pathname === route.href && "bg-sky-500/10 text-sky-700"
            )}
            variant="ghost"
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

TodoItem.Skeleton = function SkeletonTodoItem() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full absolute" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
};
