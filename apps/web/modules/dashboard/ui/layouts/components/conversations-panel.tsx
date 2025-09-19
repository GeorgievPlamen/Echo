"use client";

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Select } from "@workspace/ui/components/select";
import { ArrowRightIcon, ArrowUpIcon, CheckIcon, ListIcon } from "lucide-react";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { usePaginatedQuery } from "@workspace/backend/convex";
import { api } from "@workspace/backend/_generated/api";
import Link from "next/link";
import { cn } from "@workspace/ui/lib/utils";

const ConversationsPanel = () => {
  const conversations = usePaginatedQuery(
    api.private.conversations.getMany,
    {
      status: undefined,
    },
    {
      initialNumItems: 10,
    }
  );

  return (
    <div className="flex h-full w-full flex-col bg-background text-sidebar-foreground">
      <div className="flex flex-col gap-3.5 border-b p-2">
        <Select defaultValue="all" onValueChange={() => {}} value="all">
          <SelectTrigger className="h-8 border-none px-1.5 shadow-none ring-0 hover:bg-accent focus-visible:ring-01">
            <SelectValue placeholder="filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              <div className="flex items-center gap-2">
                <ListIcon className="size-4" />
                <span>All</span>
              </div>
            </SelectItem>
            <SelectItem value="unresolved">
              <div className="flex items-center gap-2">
                <ArrowRightIcon className="size-4" />
                <span>Unresovled</span>
              </div>
            </SelectItem>
            <SelectItem value="escalated">
              <div className="flex items-center gap-2">
                <ArrowUpIcon className="size-4" />
                <span>Escalated</span>
              </div>
            </SelectItem>
            <SelectItem value="resolved">
              <div className="flex items-center gap-2">
                <CheckIcon className="size-4" />
                <span>Resolved</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ScrollArea className="max-h-[calc(100vh-53px)]">
        <div className="flex w-full flex-1 flex-col text-sm">
          {conversations.results.map((conversation) => {
            return (
              <Link
                key={conversation._id}
                className={cn(
                  "relative flex cursor-pointer items-start gap-3 border-b p-4 py-5 text-sm leading-tight hover:bg-accent hover:text-accent-foreground"
                )}
                href={`/conversations/${conversation._id}`}
              >
                Avatar
              </Link>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ConversationsPanel;
