import Branding from "@/components/shop/branding";
import MobileNav from "@/components/shop/mobile-nav";
import SidebarFooter from "@/components/shop/sidebar-footer";
import CartList from "./_components/CartList";

export default function Cart() {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen max-h-screen">
        {/* mobile nav */}
        <MobileNav />

        {/* side bar */}
        <div className="bg-white w-[18rem] min-w-[18rem] md:flex flex-col hidden">
          <Branding />
          <div className="flex-grow"></div>
          <SidebarFooter />
        </div>

        {/* content */}
        <main className="bg-white w-full max-h-screen overflow-auto text-center py-2">
          <CartList />
        </main>

        {/* Mobile Button */}
        <div className="flex text-sm w-64 absolute bottom-0 right-0 h-16 items-center content-center justify-center space-x-2 px-6 bg-black text-white cursor-pointer">
          <div>Checkout</div>
        </div>

        {/* aside */}
        <aside className="bg-white w-[16rem] min-w-[16rem] hidden lg:flex flex-col">
          <div className="p-6 flex-grow flex items-center justify-center content-center">
            <div className="space-y-8 w-full"></div>
          </div>

          <div className="flex text-sm w-64 absolute bottom-0 right-0 h-16 items-center content-center justify-center space-x-2 px-6 bg-black text-white cursor-pointer">
            <div>Checkout</div>
          </div>
        </aside>
      </div>
    </>
  );
}
