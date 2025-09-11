import { OrganizationGuard } from "@/modules/auth/ui/components/organization-guard";
import { AuthLayout } from "@/modules/auth/ui/layouts/auth-layout";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthLayout>
      <OrganizationGuard>{children}</OrganizationGuard>
    </AuthLayout>
  );
};
export default Layout;
