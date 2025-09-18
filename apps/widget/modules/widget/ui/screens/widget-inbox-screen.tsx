import { useAtomValue, useSetAtom } from "jotai";
import {
  contactSessionIdAtomFamily,
  conversationIdAtom,
  organizationIdAtom,
  screenAtom,
} from "../../atoms/widget-atoms";
import WidgetHeader from "../components/widget-header";
import WidgetFooter from "../components/widget-footer";
import { Button } from "@workspace/ui/components/button";
import { ArrowLeftIcon } from "lucide-react";
import { usePaginatedQuery } from "@workspace/backend/convex";
import { api } from "@workspace/backend/_generated/api";
import { ConversationStatusIcon } from "@workspace/ui/components/conversation-status-icon";

export const WidgetInboxScreen = () => {
  const setScreen = useSetAtom(screenAtom);
  const organizationId = useAtomValue(organizationIdAtom);
  const contactSessionId = useAtomValue(
    contactSessionIdAtomFamily(organizationId || "")
  );
  const setConversationId = useSetAtom(conversationIdAtom);

  const conversations = usePaginatedQuery(
    api.public.conversations.getMany,
    contactSessionId ? { contactSessionId } : "skip",
    { initialNumItems: 10 }
  );

  return (
    <>
      <WidgetHeader>
        <div className="font-semibold items-cetner gap-x-2">
          <Button
            variant={"transparent"}
            size={"icon"}
            onClick={() => setScreen("selection")}
          >
            <ArrowLeftIcon />
            <p>Inbox</p>
          </Button>
        </div>
      </WidgetHeader>
      <div className="flex flex-1 flex-col gap-y-2 p-4 overflow-y-auto">
        {conversations?.results?.map((conversation) => (
          <Button
            className="h-20 w-full justify-between"
            key={conversation._id}
            variant={"outline"}
            onClick={() => {
              setConversationId(conversation._id);
              setScreen("chat");
            }}
          >
            <div className="flex w-full flex-col gap-4 overflow-hidden text-start">
              <div className="flex w-full items-center justify-between gap-x-2">
                <p className="text-muted-foreground text-xs">Chat</p>
                <p className="text-muted-foreground text-xs">
                  {conversation._creationTime}
                </p>
              </div>
              <div className="flex w-full items-center justify-between gap-x-2">
                <p className="truncate text-sm">
                  {conversation.lastMessage?.text}
                </p>
                <ConversationStatusIcon status={conversation.status} />
              </div>
            </div>
          </Button>
        ))}
      </div>
      <WidgetFooter />
    </>
  );
};
