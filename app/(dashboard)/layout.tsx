"use client";
import Header from "@/components/header/Header";
import { Authority } from "@/components/hoc/Authority";
import React, { ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const router = useRouter();
  useEffect(() => {
    if (!Cookies.get("access_token")) {
      router.replace("/auth/login");
      toast.error("session expired, please login again");
    }
  }, []);
  return (
    <div className="w-full h-full flex justify-center bg-white">
      <div className="max-w-[1280px] w-full h-full border-l-1 border-r-1 flex flex-col items-center justify-start">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Authority(Layout);
