"use client";

import * as React from "react";
import {
  ConvexProviderWithClerk,
  ConvexReactClient,
} from "@workspace/backend/convex";
import { useAuth, ClerkProvider } from "@clerk/nextjs";

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error("Missing NEXT_PUBLIC_CONVEX_URL env variable.");
}

export function Providers({ children }: { children: React.ReactNode }) {
  const convex = new ConvexReactClient(
    process.env.NEXT_PUBLIC_CONVEX_URL ?? ""
  );

  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
