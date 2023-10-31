import Branding from "@/components/shop/branding";
import MobileNav from "@/components/shop/mobile-nav";
import SidebarFooter from "@/components/shop/sidebar-footer";
interface ShopProductProps {
  children?: React.ReactNode;
}

export default function ShopProudctLayout({ children }: ShopProductProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen max-h-screen">
      {/* mobile nav */}
      <MobileNav />

      {/* side bar */}
      <div className="bg-white w-[18rem] min-w-[18rem] md:flex flex-col hidden">
        <Branding />
        <div className="flex-grow" />
        <SidebarFooter />
      </div>

      {/* content */}
      <main className="bg-white w-full max-h-screen overflow-auto text-center">{children}</main>
    </div>
  );
}
