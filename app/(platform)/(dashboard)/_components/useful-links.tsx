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
} from "lucide-react";

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
    label: "Chat GPT",
    icon: <Bot className="w-5 h-5 ml-4 mr-4" />,
    href: "https://chat.openai.com/",
  },
];

export const UsefulLink = () => {
  return (
    <AccordionItem value="item-1" className="border-none">
      <AccordionTrigger className="flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md bg-yellow-400/30 hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline">
        Useful Link
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {links.map((link) => (
          <Link href={link.href} target="_blank" key={link.href}>
            <Button
              size="sm"
              className="w-full font-normal justify-start pl-10 mb-1"
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
