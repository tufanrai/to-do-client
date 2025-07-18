"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTask } from "../api/task.api";
import TaskForm from "@/components/form/TaskForm";
import Checklist from "@/components/checklist/Checklist";

const page = () => {
  // query data
  const query = useQuery({
    queryKey: ["get-all-task"],
    queryFn: getTask,
  });

  console.log(query.data);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="max-w-[400px] max-h-[480px] w-full h-full rounded-md border border-slate-400 shadow-lg">
        <div className="px-16 py-8">
          <h1 className="font-bold text-xl text-black">To Dos</h1>
        </div>
        <div className="px-8">
          <TaskForm />
        </div>
        <div className="mt-5 w-full flex flex-col items-start justify-start">
          <h1 className="font-thin text-black px-8 py-5">Due tasks</h1>
          <div className="w-full max-h-70 h-full overflow-y-auto">
            {query.data && query?.data
              ? // @ts-expect-error
                query?.data.data?.map((task: any) => {
                  return (
                    <Checklist
                      tasks={task.title}
                      key={task._id}
                      identity={task._id}
                    />
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
