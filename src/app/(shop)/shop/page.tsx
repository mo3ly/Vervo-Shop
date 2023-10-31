import Link from "next/link";
import ProductGrid from "./_components/ProductGrid";
import { db } from "@/lib/db";
import MobileNav from "@/components/shop/mobile-nav";
import SidebarMenu from "@/components/shop/sidebar-menu";
import Branding from "@/components/shop/branding";
import SidebarFooter from "@/components/shop/sidebar-footer";
import Filters from "@/components/shop/filters";
import Search from "@/components/shop/search";

import { Metadata } from "next";

// export const revalidate = 1;
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop.",
};

// source: https://dribbble.com/shots/4085578-Nike-01
//  - https://i.ibb.co/Qfdh9Y0/attachment-for-dribble2-nike-01.png
//  - https://i.ibb.co/TY5JP77/attachment-for-dribble2-nike-02.png
//  - https://i.ibb.co/Qd5Ndky/attachment-for-dribble2-NIKE-03.png

async function getProducts() {
  return await db.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      category: { select: { name: true } },
      price: true,
      stock: true,
      isEnabled: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export default async function Shop() {
  const products = await getProducts();

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen max-h-screen">
        {/* mobile nav */}
        <MobileNav />

        {/* side bar */}
        <div className="bg-white w-[18rem] min-w-[18rem] md:flex flex-col hidden">
          <Branding />
          <SidebarMenu />
          <SidebarFooter />
        </div>

        {/* content */}
        <main className="bg-white w-full max-h-screen overflow-auto">
          <ProductGrid products={products} />
        </main>

        {/* aside */}
        <aside className="bg-white w-[16rem] min-w-[16rem] hidden lg:flex flex-col">
          <Search />

          <Filters />

          <Link href={"/cart"}>
            <div className="flex items-center content-center justify-center space-x-2 px-6 bg-black text-white h-16 w-full cursor-pointer text-sm">
              <svg fill="#ffffff" className="w-5 h-5" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.524 53.524">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M53.262,22.489c0.03-0.16,0.03-0.33,0.01-0.55c-0.04-0.43-0.29-0.87-0.75-0.95c-3.76-0.71-7.61-0.56-11.48-0.26 c-0.01-0.04-0.01-0.08-0.04-0.13c-1.79-3.14-3.19-6.49-5-9.63c-1.19-2.05-3.26-5.91-6.12-5.73c-0.52,0.04-1.03,0.46-0.99,1.02 c0.26,3.37,4.92,13.18,6.18,14.98c-1.63,0.12-3.25,0.21-4.86,0.21h-15.49c1.59-2.24,3.04-4.59,4.38-6.99 c0.97-1.74,3.53-5.68,2.03-7.73c-0.32-0.43-0.88-0.65-1.38-0.34c-0.28,0.18-1.25,0.68-1.45,0.91c-1.27,1.48-2.289,3.14-3.289,4.81 c-0.11,0.16-0.21,0.32-0.32,0.48c-0.92,1.3-5.85,8.7-5.92,8.86h-7.52c-0.63,0-0.94,0.48-0.94,0.98c-0.26,0.21-0.4,0.55-0.25,0.97 c2.07,5.71,4.69,11.19,6.5,17c0.87,2.81,1.11,5.37,4.04,6.63c3.62,1.55,8.77,1.11,12.6,1.21c6.2,0.18,12.41-0.13,18.59-0.62 c0.39-0.03,1.41-0.66,1.6-1.01c4.1-7.34,5.99-15.62,10-23C53.631,23.179,53.522,22.769,53.262,22.489z M9.001,40.739 c-0.1,0-0.19,0.04-0.28,0.06c-0.441-1.5-0.88-3-1.4-4.48c-0.9-2.61-1.97-5.15-3.03-7.7c1.02,0,2.03,0,3.04,0.01 c-0.01,0.13,0,0.28,0.06,0.44c0.66,1.77,1.04,3.6,1.46,5.44c0.49,2.18,1.46,4.14,2.11,6.26C10.312,40.76,9.662,40.749,9.001,40.739 z M12.892,40.82c0.05-0.17,0.07-0.35,0.01-0.56c-0.57-1.88-1.43-3.63-1.94-5.53c-0.55-2.04-0.89-4.11-1.61-6.1 c1.21,0,2.41,0.01,3.61,0.01c-0.1,0.24-0.11,0.53,0.04,0.83c1.7,3.51,1.82,7.45,2.35,11.25c0.01,0.07,0.05,0.12,0.07,0.19 C14.582,40.879,13.731,40.84,12.892,40.82z M17.332,40.979c0.02-0.09,0.04-0.18,0.02-0.29c-0.57-4.1-0.77-8.25-2.55-12.05h4.42 c0.22,2.01,0.59,4,0.86,6.01c0.3,2.14,0.24,4.31,0.52,6.46C19.512,41.07,18.421,41.019,17.332,40.979z M22.602,41.189 c0-0.03,0.01-0.05,0-0.09c-0.28-2.16-0.28-4.32-0.52-6.48c-0.21-2.01-0.64-3.99-0.86-5.99c1.21-0.01,2.42-0.03,3.63-0.04 c-0.02,4.19-0.28,8.37,0.09,12.55c0,0.05,0.03,0.08,0.04,0.13C24.182,41.249,23.392,41.219,22.602,41.189z M30.772,28.55 c-0.06,4.12-1.62,12.63-1.52,12.81c-0.78-0.01-1.56-0.02-2.34-0.04c0.01-0.07,0.03-0.13,0.03-0.22c-0.37-4.17-0.11-8.34-0.09-12.52 c1.31-0.02,2.62-0.04,3.93-0.07C30.781,28.53,30.772,28.539,30.772,28.55z M31.001,41.369c0.03-0.05,0.06-0.1,0.07-0.17 c0.76-4.21,1.64-8.38,1.7-12.68c0-0.02-0.01-0.03-0.01-0.04c1.24-0.03,2.47-0.06,3.71-0.1c-0.01,0.06-0.03,0.11-0.03,0.17 c0.04,4.28-2.59,12.64-2.49,12.78C32.972,41.36,31.981,41.369,31.001,41.369z M35.642,41.269c0.08-0.14,2.84-8.45,2.8-12.75 c0-0.08-0.03-0.14-0.05-0.21c1.41-0.04,2.81-0.11,4.21-0.17c-0.28,4.29-2.08,8.85-3.44,12.91 C37.992,41.139,36.812,41.219,35.642,41.269z M43.131,40.619c-0.6,0.08-1.2,0.16-1.79,0.22c1.38-4.07,2.98-8.47,3.26-12.74 c0-0.02-0.01-0.03-0.01-0.06c1.55-0.08,3.09-0.16,4.64-0.27C47.372,32.129,43.531,40.559,43.131,40.619z"></path>
                  </g>
                </g>
              </svg>
              <div>items (0)</div>
            </div>
          </Link>
        </aside>
      </div>
    </>
  );
}
