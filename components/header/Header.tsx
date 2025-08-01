"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IUser {
  _id: string;
  full_name: string;
  user_name: string;
  email: string;
}

const Header = () => {
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== undefined) {
      let user;
      user = localStorage.getItem("user");
      setUser(user as string);
    }
  }, []);

  return (
    <div className="w-full px-8 py-4 flex items-center justify-between">
      <div>
        <p className="mr-auto px-5 py-2 font-thin italic text-black text-sm">
          welcome,{user}
        </p>
      </div>
      <div>
        <button className="border border-red-500 rounded-md font-thin text-sm text-red-500 ease duration-200 hover:bg-red-500 hover:text-white cursor-pointer px-5 py-2">
          <Link href={"/auth/login"}>Log out</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
