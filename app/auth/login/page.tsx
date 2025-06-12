"use client";
import SigninForm from "@/components/form/Signin/SignInForm";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="border-1 border-blue-500 rounded-md max-w-100 w-full">
        <div className="w-full">
          <h1 className="text-center font-black text-blue-500 text-2xl py-5">
            Sign in.
          </h1>
        </div>
        <div className="w-full px-4">
          <SigninForm />
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="font-thin text-sm text-black px-8 py-4">
            Already have an account?{" "}
            <span className="text-blue-500">
              <Link href={"/auth/register"}>Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
