"use client";
import { createAcc } from "@/src/api/createTask.api";
import { ISignup } from "@/src/interface/index.inteface";
import { signupSchema } from "@/src/schema/form-schema/task.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoIosArrowDropup } from "react-icons/io";

const SignupPage = () => {
  const route = useRouter();
  // mutation
  const { mutate, isPending } = useMutation({
    mutationFn: createAcc,
    onSuccess: (data) => {
      console.log(data);
      toast.success("successfully created account");
      route.replace("/auth/login");
    },
    onError: (error) => {
      toast.error("something went wrong please try again later");
      console.log(error.message);
    },
  });

  // input validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      c_password: "",
    },
    resolver: yupResolver(signupSchema),
  });

  const Submit: SubmitHandler<ISignup> = (data) => {
    mutate(data);
  };
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
          <form onSubmit={handleSubmit(Submit)} className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="text-sm font-thin text-slate-500">
                Full name
              </label>
              <input
                className="text-sm font-thin text-slate-500 focus:outline-0 px-4 py-2 border-b-1 border-slate-300"
                type="text"
                {...register("name")}
                placeholder="Jhon Doe"
              />
              {errors && errors.name?.message ? (
                <p className="font-thin text-xs text-rose-500 p-1">
                  {errors.name.message}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-thin text-slate-500">Email</label>
              <input
                className="text-sm font-thin text-slate-500 focus:outline-0 px-4 py-2 border-b-1 border-slate-300"
                type="text"
                {...register("email")}
                placeholder="demomail@gmail.com"
              />
              {errors && errors.email?.message ? (
                <p className="font-thin text-xs text-rose-500 p-1">
                  {errors.email.message}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-thin text-slate-500">
                Password
              </label>
              <input
                className="text-sm font-thin text-slate-500 focus:outline-0 px-4 py-2 border-b-1 border-slate-300"
                type="password"
                {...register("password")}
                placeholder="Password"
              />
              {errors && errors.password?.message ? (
                <p className="font-thin text-xs text-rose-500 p-1">
                  {errors.password.message}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-thin text-slate-500">
                Confirm password
              </label>
              <input
                className="text-sm font-thin text-slate-500 focus:outline-0 px-4 py-2 border-b-1 border-slate-300"
                type="password"
                {...register("c_password")}
                placeholder="Re-enter your password"
              />
              {errors && errors.c_password?.message ? (
                <p className="font-thin text-xs text-rose-500 p-1">
                  {errors.c_password.message}
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <button
                type="submit"
                disabled={isPending}
                className="w-full border-1 border-primary text-primary text-center py-3 text-sm rounded-md cursor-pointer hover:bg-primary hover:text-white ease duration-200"
              >
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

export default SignupPage;
