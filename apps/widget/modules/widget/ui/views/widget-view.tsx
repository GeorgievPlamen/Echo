"use client";

import React from "react";
import WidgetAuthScreen from "../screens/widget-auth-screen";
import { useAtomValue } from "jotai";
import { screenAtom } from "../../atoms/widget-atoms";

interface Props {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: Props) => {
  const screen = useAtomValue(screenAtom);
  const screenComponents = {
    error: <p>TODO error</p>,
    loading: <p>TODO loading</p>,
    auth: <WidgetAuthScreen />,
    voice: <p>TODO voice</p>,
    inbox: <p>TODO inbox</p>,
    selection: <p>TODO selection</p>,
    chat: <p>TODO chat</p>,
    contact: <p>TODO contact</p>,
  };
  
  return (
    <main className="flex h-full w-full min-h-screen min-w-screen flex-col overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
    </main>
  );
};
