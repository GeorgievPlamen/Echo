"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "@workspace/backend/convex";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <Button onClick={() => addUser()}>Add</Button>
          <UserButton />
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">{JSON.stringify(users)}</h1>
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>Must be signed in</p>
        <SignInButton>Sign in!</SignInButton>
      </Unauthenticated>
    </>
  );
}
