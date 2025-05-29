"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { GiNotebook } from "react-icons/gi";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="w-full h-screen overflow-hidden bg-background flex justify-center">
      <div className="max-w-[1280px] w-full flex">
        <Toaster position="top-left" reverseOrder={false} />
        <div className="max-w-[240px] w-full h-screen border-r-1 border-slate-600">
          <h1 className="font-light italic text-2xl flex text-primary border-b-1 border-slate-600 px-5 py-3">
            <GiNotebook className="mr-2 font-light" />
            To Doos
          </h1>
          <div className="mt-5 px-5 py-2">
            <ul className="flex flex-col gap-3">
              <li className=" border-b-1 border-slate-400">
                <p className="px-5 py-2 text-center text-sm font-thin tex-slate-400 w-full ease duration-200 hover:bg-gray-300">
                  Todays
                </p>
              </li>
              <li className=" border-b-1 border-slate-400">
                <p className="px-5 py-2 text-center text-sm font-thin tex-slate-400 w-full ease duration-200 hover:bg-gray-300">
                  Completed
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-14 border-b-1 border-slate-500">
          <div className="w-full">
            <ul className="flex items-center justify-end">
              <li className="mr-auto h-14 px-2 py-1 flex items-center justify-center">
                <h2 className="text-slate-600 italic font-thin text-md">
                  Welcome,Tufan
                </h2>
              </li>
              <li className="w-300px h-14">
                <div className="px-3 w-full h-full flex items-center justify-center gap-2 ">
                  <Link
                    className="underline cursor-pointer text-sm font-thin text-slate-800"
                    href={"/"}
                  >
                    Tufan Rai
                  </Link>
                  <Link
                    href={"/"}
                    className="px-3 py-1 text-sm font-thin border-1 border-primary text-primary rounded-lg cursor-pointer hover:bg-primary hover:text-slate-100 ease duration-200"
                  >
                    Log out
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
