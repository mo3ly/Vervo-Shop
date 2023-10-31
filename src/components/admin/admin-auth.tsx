"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import PinCode from "./pin-code";
import { authAtom } from "@/lib/atoms/auth-atom";
import Header from "./header";

const AdminAuth = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated] = useAtom(authAtom);

  return (
    <>
      {isAuthenticated ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Header />
          {children}
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} className="flex flex-col h-screen justify-center items-center">
          <PinCode />
        </motion.div>
      )}
    </>
  );
};

export default AdminAuth;
