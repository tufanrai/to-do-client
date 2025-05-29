"use client";
import { createTask } from "@/src/api/createTask.api";
import { Itask } from "@/src/interface/index.inteface";
import { taskSchema } from "@/src/schema/form-schema/task.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosAddCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const Page = () => {
  // mutation
  const { mutate, isPending } = useMutation({
    mutationFn: createTask,
    onSuccess: (data) => {
      console.log(data);
      toast.success("task has been created successfully");
      reset();
    },
    onError: (error) => {
      console.log(error.message);
      toast.error("something went wrong please try again leter");
    },
  });

  // input validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Itask>({
    defaultValues: {
      title: "",
      disc: "",
    },
    resolver: yupResolver(taskSchema),
  });

  const Submit: SubmitHandler<Itask> = (data) => {
    mutate(data);
  };

  // show and hide the task adding card
  const [show, setShow] = useState(false);
  const displayCard = () => {
    setShow(true);
  };
  const hideCard = () => {
    setTimeout(() => {
      reset();
      setShow(false);
    }, 100);
  };
  return (
    <div className="w-full h-screen px-9 py-5">
      <h1 className="font-semibold text-2xl text-slate-600 italic">
        To Doo...
      </h1>
      <div className=" w-full h-full flex justify-center">
        <div className="max-w-[650px] w-full h-full py-4">
          <span
            onClick={displayCard}
            className="w-full px-5 py-2 text-sm font-thin text-slate-400 flex items-center cursor-pointer ease duration-200 hover:text-slate-500"
          >
            <IoIosAddCircleOutline className="mr-2" />
            Add task
          </span>
          {show && show ? (
            <form
              onSubmit={handleSubmit(Submit)}
              className="border-1 rounded-t-md border-slate-400"
            >
              <input
                className="w-full px-3 py-1 rounded-t-md h-12 focus:outline-0 "
                {...register("title")}
                type="text"
                placeholder="Title"
              />
              <input
                className="w-full px-3 py-1 h-9 text-sm font-thin focus:outline-0"
                {...register("disc")}
                type="text"
                placeholder="Discription"
              />
              <div className="w-full flex gap-4 items-center justify-end border-t-1 border-slate-400 px-5 py-3">
                <button
                  type="reset"
                  onClick={hideCard}
                  className="px-3 py-1 border-1 rounded-sm text-sm font-thin text-slate-400 ease duration-200 hover:bg-slate-400 hover:text-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  onClick={hideCard}
                  className="px-3 py-1 border-1 border-primary rounded-sm text-sm font-thin text-primary ease duration-200 hover:bg-primary hover:text-slate-100"
                >
                  Add
                </button>
              </div>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
