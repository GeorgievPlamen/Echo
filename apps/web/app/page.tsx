"use client";

import { api } from "@workspace/backend/_generated/api";
import { useMutation, useQuery } from "@workspace/backend/convex";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <Button onClick={() => addUser()}>Add</Button>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">{JSON.stringify(users)}</h1>
      </div>
    </div>
  );
}
