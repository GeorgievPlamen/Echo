"use client";

import { ReactNode } from "react";
import { AuthLayout } from "../layouts/auth-layout";
import { useOrganization } from "@clerk/nextjs";
import { OrgSelectView } from "../views/org-select-view";

export const OrganizationGuard = ({ children }: { children: ReactNode }) => {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <AuthLayout>
        <OrgSelectView />
      </AuthLayout>
    );
  }

  return <>{children}</>;
};
