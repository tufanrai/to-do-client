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
    useEffect(() => {
      if (!valid) {
        router.replace("/auth/login");
        if (token) {
          Cookies.remove("access_token");
        }
        localStorage.removeItem("user");
        toast.error("session expired, please login again");
        return;
      }
    }, []);

    return <Component {...props} />;
  };
}
