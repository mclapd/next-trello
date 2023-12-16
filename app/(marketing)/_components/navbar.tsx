"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { useConvexAuth } from "convex/react";
// import { SignInButton, SignUpButton } from "@clerk/clerk-react";
// import { Spinner } from "@/components/spinner";

export const Navbar = () => {
  // const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get BAN WorkNote for free</Link>
          </Button>
          {/* {isLoading && <Spinner />}
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="sm">Get BAN WorkNote for free</Button>
              </SignUpButton>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};
