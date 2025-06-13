"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { DecodeToken } from "@/helper/token-decode";

export function Authority<T>(Component: React.ComponentType<T>) {
  return function validatedToken(props: any) {
    const router = useRouter();
    const token = Cookies.get("access_token") ?? "";

    const valid = DecodeToken(token);
    console.log(valid);
    useEffect(() => {
      if (!valid) {
        if (token) {
          Cookies.remove("access_token");
        }
        localStorage.removeItem("user");
        toast.error("session expired, please login again");
        router.replace("/auth/login");
        return;
      }
    }, []);

    return <Component {...props} />;
  };
}
