"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { StickyNote, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface NoteItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export const NoteItem = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NoteItemProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const routes = [
    {
      label: "Note Boards",
      icon: <StickyNote className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/notes`,
    },
    {
      label: "Note Activity",
      icon: <Activity className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/note-activity`,
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
            <Image src="/memo.svg" alt="checklist" width={24} height={24} />
          </div>
          <span className="font-medium text-sm">NoteItem</span>
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

NoteItem.Skeleton = function SkeletonNoteItem() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full absolute" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
};
