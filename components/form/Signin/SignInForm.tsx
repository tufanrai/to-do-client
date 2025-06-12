"use client";
import { login } from "@/app/api/auth.api";
import { ILog } from "@/interface/loginInterface";
import { ILogin } from "@/schema/log.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoMail } from "react-icons/go";
import { MdLockOutline } from "react-icons/md";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SigninForm = () => {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    mutationKey: ["log-user"],
    onSuccess: (data) => {
      console.log(data);
      Cookies.set("access_token", data?.access_token);
      localStorage.setItem("user", data?.data.full_name);
      toast.success(data?.message);
      router.replace("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ILog),
  });

  const Submit: SubmitHandler<ILogin> = (data) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(Submit)}
      className="w-full flex flex-col gap-1 "
    >
      <div className="w-full flex flex-col items-start my-1 justify-center gap-1 text-black relative">
        <label className="font-thin text-sm px-8">Email</label>
        <GoMail className="absolute top-9 left-2" />
        <input
          type="text"
          {...register("email")}
          className={`rouned-md w-full px-8 py-2 text-sm font-thin border-b-1 border-blue-500 focus:outline-none ${
            errors.email && errors.email ? "border-red-500" : "border-blue-500"
          }`}
          placeholder="jhond@gmail.com"
        />
        {errors.email && errors.email ? (
          <p className="font-thin text-xs text-red-500 px-2 py-1">
            {errors.email.message}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="w-full flex flex-col items-start my-1 justify-center gap-1 text-black relative">
        <label className="font-thin text-sm px-8">Password</label>
        <MdLockOutline className="absolute top-9 left-2" />
        <input
          type="password"
          {...register("password")}
          className={`rouned-md w-full px-8 py-2 text-sm font-thin border-b-1 border-blue-500 focus:outline-none ${
            errors.password && errors.password
              ? "border-red-500"
              : "border-blue-500"
          }`}
          placeholder="Password"
        />
        {errors.password && errors.password ? (
          <p className="font-thin text-xs text-red-500 px-2 py-1">
            {errors.password.message}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="w-full flex items-center justify-end gap-2 px-4 py-4">
        <button
          type="reset"
          className="border border-slate-500 px-4 py-2 font-thin text-sm text-slate-500 rounded-md cursor-pointer ease duration-200 hover:bg-slate-500 hover:text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isPending}
          className={`border border-blue-500 px-4 py-2 font-thin text-sm text-blue-500 rounded-md ease duration-200 hover:bg-blue-500 hover:text-white ${
            isPending && isPending ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
