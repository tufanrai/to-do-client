"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

const user = localStorage.getItem("user");
const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="w-full h-full flex justify-center bg-white">
      <div className="max-w-[1280px] w-full h-full border-l-1 border-r-1 flex flex-col items-center justify-start">
        <div className="w-full px-8 py-4 flex items-center justify-between">
          <div>
            <p className="mr-auto px-5 py-2 font-thin italic text-black text-sm">
              welcome, {user}
            </p>
          </div>
          <div>
            <button className="border border-red-500 rounded-md font-thin text-sm text-red-500 ease duration-200 hover:bg-red-500 hover:text-white cursor-pointer px-5 py-2">
              <Link href={"/auth/login"}>Log out</Link>
            </button>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
