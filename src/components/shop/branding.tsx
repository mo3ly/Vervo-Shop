"use client";

import { siteConfig } from "@/config/site";
import Image from "next/image";

const Branding: React.FC = () => {
  return (
    <div className="bg-black h-28 p-6 flex items-center content-center justify-start space-x-2">
      <Image alt="logo" className="w-12" src="/logos/logo-white-256x256.png" width={48} height={48} />
      <span className="text-white text-2xl font-semibold">{siteConfig.name}</span>
    </div>
  );
};

export default Branding;
