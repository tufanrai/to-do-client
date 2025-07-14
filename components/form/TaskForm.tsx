"use client";
import React from "react";
import { ITask } from "@/interface/task.interface";
import { taskSchema } from "@/schema/task.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addTask } from "@/app/api/task.api";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { IoMdAdd } from "react-icons/io";

const TaskForm = () => {
  const Client = useQueryClient();
  // mutation
  const { mutate, isPending } = useMutation({
    mutationFn: addTask,
    mutationKey: ["add-new-task"],
    onSuccess: (data) => {
      toast.success("task successfully added");
      Client.invalidateQueries({ queryKey: ["get-all-task"] });
      console.log("mutation data:", data);
      reset();
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  // input validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(taskSchema),
  });

  const Submit: SubmitHandler<ITask> = (data) => {
    mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(Submit)} className="flex gap-2">
        <input
          type="text"
          {...register("title")}
          className={`w-full border-b-1 text-black text-sm px-5 py-2 focus:outline-none ${
            errors && errors.title?.message ? "border-red-500" : "border-black"
          }`}
          placeholder="Add new task."
        />
        <button
          className={`border-1 border-blue-500 rounded-md w-12 h-8 flex items-center justify-center text-white bg-blue-500 ${
            isPending && isPending ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          type="submit"
          disabled={isPending}
        >
          <IoMdAdd />
        </button>
      </form>
      {errors && errors.title?.message ? (
        <p className="text-xs font-thin text-red-500 py-2">
          please enter the task
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default TaskForm;
