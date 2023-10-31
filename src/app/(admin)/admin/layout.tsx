import AdminAuth from "@/components/admin/admin-auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin.",
};

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      <div>
        <div className="absolute h-full -z-10 w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <AdminAuth>{children}</AdminAuth>
      </div>
    </>
  );
}
