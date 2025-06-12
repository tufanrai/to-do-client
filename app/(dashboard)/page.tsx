"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTask } from "../api/task.api";
import TaskForm from "@/components/form/TaskForm";
import Checklist from "@/components/checklist/Checklist";
import { Authority } from "@/components/hoc/Authority";

const page = () => {
  // query data
  const query = useQuery({
    queryKey: ["get-all-task"],
    queryFn: getTask,
  });

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="max-w-[350px] max-h-[500px] w-full h-full rounded-md">
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
                  // map always returns smthing
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

export default Authority(page);
