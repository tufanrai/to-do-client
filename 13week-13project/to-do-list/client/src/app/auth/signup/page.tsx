import Link from "next/link";
import React from "react";
import { IoIosArrowDropup } from "react-icons/io";

const page = () => {
  return (
    <div className="w-full h-screen bg-background overflow-hidden flex items-center justify-center">
      <div className="max-w-[350px] w-full border-1 border-primary rounded-ss-lg rounded-ee-lg shadow-lg shadow-primary/75 relative">
        <div className="absolute top-0 left-0 p-4 bg-primary/25 rounded-ee-xl w-13 h-13 flex items-center justify-center ">
          <Link href={"/"}>
            <IoIosArrowDropup className="font-semibold w-full h-full hover:rotate-[-90deg] ease duration-200" />
          </Link>
        </div>
        <h1 className="font-semibold text-center text-lg py-5 text-slate-600">
          Sign up
        </h1>
        <div className="px-4 py-1 mb-9">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="text-sm font-thin text-slate-500">
                Full name
              </label>
              <input
                className="text-sm font-thin text-slate-500 focus:outline-0 px-4 py-2 border-b-1 border-slate-300"
                type="text"
                placeholder="Jhon Doe"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-thin text-slate-500">Email</label>
              <input
                className="text-sm font-thin text-slate-500 focus:outline-0 px-4 py-2 border-b-1 border-slate-300"
                type="text"
                placeholder="demomail@gmail.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-thin text-slate-500">
                Password
              </label>
              <input
                className="text-sm font-thin text-slate-500 focus:outline-0 px-4 py-2 border-b-1 border-slate-300"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <button className="w-full border-1 border-primary text-primary text-center py-3 text-sm rounded-md cursor-pointer hover:bg-primary hover:text-white ease duration-200">
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="mb-4 px-4">
          <p className="font-thin text-xs text-center text-slate-500">
            Already have an accoutn?{" "}
            <Link className="text-primary underline" href={"/auth/login"}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
