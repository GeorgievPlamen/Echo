"use client";

import { WidgetView } from "@/modules/widget/ui/views/wiedget-view";
import { Button } from "@workspace/ui/components/button";
import { use } from "react";

interface Props {
  searchParams: Promise<{
    organizationId: string;
  }>;
}

export default function Page({ searchParams }: Props) {
  const { organizationId } = use(searchParams);
  return <WidgetView organizationId={organizationId} />;
}
