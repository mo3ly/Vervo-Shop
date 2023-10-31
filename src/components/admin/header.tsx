"use client";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full sticky h-14 bg-black text-white">
      <div className="container flex h-full items-center justify-between content-center">
        <div className="bg-black flex items-center justify-end space-x-2 pl-4">
          <img alt="logo" className="w-10" src="/logos/logo-white-256x256.png" />
          <span className="text-white text-xl font-semibold">Dashboard</span>
        </div>

        <Link href={"/shop"} className="pr-6">
          <div className="uppercase font-semibold border-0 px-4 text-sm py-2 cursor-pointer flex items-center justify-between space-x-2">
            <ExternalLinkIcon /> <span>Shop</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
