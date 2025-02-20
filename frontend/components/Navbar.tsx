import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Input } from "./ui/input";

const Navbar = () => {
    return ( 
        <div className="flex items-center justify-between p-6 shadow-lg bg-[#004079] shadow-2xs m-3 rounded-xl h-16">
            <div className="flex items-center gap-4">
                <Image 
                    width={40} 
                    height={40} 
                    src="/logo_v0.1.svg" 
                    alt="Weather app logo"
                    className="object-contain"
                />
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
