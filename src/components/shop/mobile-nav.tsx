"use client";

import React from "react";
import Image from "next/image";
import { DotsHorizontalIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

const MobileNav: React.FC = () => {
  return (
    <div className="md:hidden bg-black h-16 sticky flex items-center justify-between top-0 w-full px-6 z-10">
      <div className="bg-black h-16 flex items-center content-center justify-start">
        <Image alt="logo" className="w-10" src="/logos/logo-white-256x256.png" width={48} height={48} />
      </div>
      <div>
        <HamburgerMenuIcon className="h-5 w-5 text-white" />
      </div>
    </div>
  );
};

export default MobileNav;
