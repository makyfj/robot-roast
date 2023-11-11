"use client";
import { signIn, signOut } from "next-auth/react";
import type { Session } from "next-auth";

const Auth = ({ session }: { session: Session | null }) => {
  return (
    <div>
      {session ? (
        <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
      ) : (
        <button onClick={() => signIn("discord", { callbackUrl: "/" })}>
          Sign in
        </button>
      )}
    </div>
  );
};

export default Auth;
