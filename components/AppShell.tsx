"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterEn from "@/components/FooterEn";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = isEnglish ? "en" : "ko";
    }
  }, [isEnglish]);

  return (
    <div className="bg-pattern min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-10">{children}</main>
      {isEnglish ? <FooterEn /> : <Footer />}
    </div>
  );
};

export default AppShell;
