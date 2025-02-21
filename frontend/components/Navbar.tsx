"use client"
import Link from "next/link";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import { Input } from "./ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Navbar = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="flex items-center justify-between p-6 shadow-lg bg-[#007cdf] shadow-2xs mr-5 ml-5 mt-3 rounded-xl h-16">
      <div className="flex items-center gap-4">
        <h1 className="text-white text-2xl font-semibold">SkyCast</h1>
      </div>
      <div className="w-1/3 mx-4">
        <Input
          placeholder="Search cities..."
          className="w-full h-10 px-4 text-lg bg-white/90 focus:bg-white transition-colors duration-200"
        />
      </div>

      <nav className="flex items-center gap-8">
        <Link
          href="/"
          className="text-white hover:text-gray-200 transition-colors duration-200 text-lg"
        >
          Home
        </Link>
        <Link
          href="/help"
          className="text-white hover:text-gray-200 transition-colors duration-200 text-lg"
        >
          Help
        </Link>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 hover:bg-gray-100 transition-colors duration-200">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user?.imageUrl} alt={user?.firstName || 'User'} />
              <AvatarFallback className="rounded-lg">
                {user?.firstName?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
            {isLoaded && user && (
              <div className="grid flex-1 text-left text-sm leading-tight text-white">
                <span className="truncate font-semibold">{user.firstName}</span>
                <span className="truncate text-xs text-white/80">
                  {user.primaryEmailAddress?.toString()}
                </span>
              </div>
            )}
          </div>
        </SignedIn>
      </nav>
    </div>
  );
};

export default Navbar;