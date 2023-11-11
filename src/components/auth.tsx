"use client";
import { signIn, signOut } from "next-auth/react";
import type { Session } from "next-auth";
import { Button } from "./ui/button";

const Auth = ({ session }: { session: Session | null }) => {
  return (
    <div>
      {session ? (
        <Button
          className="w-full"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign out
        </Button>
      ) : (
        <Button onClick={() => signIn("discord", { callbackUrl: "/" })}>
          Sign in
        </Button>
      )}
    </div>
  );
};

export default Auth;
