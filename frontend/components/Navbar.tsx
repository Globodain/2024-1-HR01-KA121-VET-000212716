"use client"
import Link from "next/link";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-6 shadow-lg bg-[#007cdf] shadow-2xs mr-5 ml-5 mt-3 rounded-xl h-16">
      <div className="flex items-center gap-4">
        <h1 className="text-white text-2xl font-semibold">SkyCast</h1>
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
        <div className="text-white">
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </div>
  );
};

export default Navbar;