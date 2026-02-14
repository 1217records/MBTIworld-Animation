"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname() || "/";

  return (
    <div className="bg-pattern min-h-screen flex flex-col">
      <Navbar pathname={pathname} />
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-10">{children}</main>
      <Footer />
    </div>
  );
};

export default AppShell;
