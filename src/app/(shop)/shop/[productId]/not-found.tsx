import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center content-center h-screen">
      <div>Uh oh! Not Found</div>
      <Link href="/shop" className={buttonVariants({ variant: "ghost" })}>
        Go to Shop
      </Link>
    </div>
  );
}
