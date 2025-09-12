"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { useMutation, useQuery } from "@workspace/backend/convex";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <Button onClick={() => addUser()}>Add</Button>
      <UserButton />
      <OrganizationSwitcher hidePersonal/>
    </div>
  );
}
