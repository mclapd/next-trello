"use client";

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Building2,
  CircleDollarSign,
  BookOpenText,
  Bug,
  Bot,
  Slack,
} from "lucide-react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const links = [
  {
    label: "Bannet",
    icon: <Building2 className="w-5 h-5 ml-4 mr-4" />,
    href: "https://banlaw01.sharepoint.com/SitePages/Home.aspx",
  },
  {
    label: "Timesheet",
    icon: <CircleDollarSign className="w-5 h-5 ml-4 mr-4" />,
    href: "https://timesheet.banlaw.com/banlaw",
  },
  {
    label: "Confluence",
    icon: <BookOpenText className="w-5 h-5 ml-4 mr-4" />,
    href: "https://banlaw.atlassian.net/wiki/home",
  },
  {
    label: "JIRA",
    icon: <Bug className="w-5 h-5 ml-4 mr-4" />,
    href: "https://banlaw.atlassian.net/jira/your-work",
  },
  {
    label: "Slack (RTL)",
    icon: <Slack className="w-5 h-5 ml-4 mr-4" />,
    href: "https://banlawworkspace.slack.com/",
  },
  {
    label: "Chat GPT",
    icon: <Bot className="w-5 h-5 ml-4 mr-4" />,
    href: "https://chat.openai.com/",
  },
];

export const UsefulLink = () => {
  return (
    <AccordionItem value="item-1" className="border-none">
      <AccordionTrigger className="flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline">
        <div className="flex items-center gap-x-2">
          <div className="w-5 h-5 relativer">
            <Image src="/link.svg" alt="link" width={24} height={24} />
          </div>
          <span className="font-medium text-sm">Useful Links</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {links.map((link) => (
          <Link href={link.href} target="_blank" key={link.href}>
            <Button
              size="sm"
              className="w-full font-normal justify-start pl-5 mb-1"
              variant="ghost"
            >
              {link.icon}
              {link.label}
            </Button>
          </Link>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

UsefulLink.Skeleton = function SkeletonUsefulLink() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full absolute" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
};
