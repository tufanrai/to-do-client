"use client";
import Header from "@/components/header/Header";
import { Authority } from "@/components/hoc/Authority";
import Link from "next/link";
import React, { ReactNode } from "react";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
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
