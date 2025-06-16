"use client";
import { getById, updTask } from "@/app/api/task.api";
import { IUpdateTask } from "@/interface/task.interface";
import { taskUpdateSchema } from "@/schema/task.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const UpdateTask = () => {
  const router = useRouter();
  // query data
  const query = useQueryClient();
  const queryData = useQuery({
    queryKey: ["fetch-data"],
    queryFn: getById,
  });
  // mutate data
  const { mutate, isPending } = useMutation({
    mutationFn: updTask,
    mutationKey: ["update-task"],
    onSuccess: (data) => {
      console.log(data);
      router.replace("/");
      query.invalidateQueries({ queryKey: ["get-all-task"] });
      localStorage.removeItem("upd_id");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  // form validation
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(taskUpdateSchema),
  });

  const Updatetask = (data: IUpdateTask) => {
    console.log(data);
    mutate(data);
  };

  return (
    <div className="w-full h-full flex items-center justify-center text-black">
      <div className="max-w-150 w-full border-1 rounded-md px-8 py-2">
        <form
          onSubmit={handleSubmit(Updatetask)}
          className="w-full flex flex-col items-start justify-center"
        >
          <div className="w-full flex flex-col items-start justify-center">
            <label>Task</label>
            <input
              className="border rounded-md px-4 py-1 font-thin text-sm text-black focus:outline-none"
              {...register("title")}
              // @ts-ignore
              defaultValue={queryData.data?.data?.title}
              type="text"
            />
          </div>
          <div className="w-full flex items-center justify-end gap-1 mt-5">
            <button
              type="reset"
              className="font-thin text-sm text-slate-500 border border-slate-500 rounded-md  hover:bg-slate-500 hover:text-white ease duration-200 cursor-pointer px-4 py-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="font-thin text-sm text-blue-500 border border-blue-500 rounded-md  hover:bg-blue-500 hover:text-white ease duration-200 cursor-pointer px-4 py-1"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
