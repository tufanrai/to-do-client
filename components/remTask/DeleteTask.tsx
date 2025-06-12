import { delTask } from "@/app/api/task.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { FC, ReactNode } from "react";
import { IoTrash } from "react-icons/io5";
import { toast } from "react-hot-toast";

type IProp = {
  id: string;
};

const DeleteTask: FC<IProp> = (id) => {
  console.log("This is what comes in id", id.id);
  const query = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: delTask,
    mutationKey: ["remove-the-task"],
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: ["get-all-task"] });
      // @ts-expect-error
      toast.success(data?.message);
      console.log(data);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <IoTrash
      onClick={() => mutate(id.id)}
      className="text-red-500 text-md font-thin cursor-pointer"
    />
  );
};

export default DeleteTask;
