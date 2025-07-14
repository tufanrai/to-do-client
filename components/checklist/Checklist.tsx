"use client";
import React, { FC, useState } from "react";
import DeleteTask from "../remTask/DeleteTask";
import { SlNote } from "react-icons/sl";
import { useRouter } from "next/navigation";

type task = {
  tasks: any[];
  identity: any;
};

const Checklist: FC<task> = ({ tasks, identity }) => {
  const router = useRouter();
  const [complete, setComplete] = useState(false);
  const Done = () => {
    setComplete(!complete);
    console.log(tasks);
    console.log("this is what goes as the endpoint", identity);
  };

  const updateFn = (id: string) => {
    router.replace("/update");
    localStorage.setItem("upd_id", id);
  };

  return (
    <div className="w-full">
      {tasks && tasks ? (
        <div className="w-full flex items-center justify-start border-b-1 border-slate-300 border-b-1 py-2">
          <div className="pl-8">
            <input
              type="checkbox"
              className="appearance-none w-4 h-4 border border-black rounded-full cursor-pointer checked:bg-black"
              onClick={Done}
            />
          </div>
          <div className="w-full">
            {complete && complete ? (
              <ul className="w-full flex items-center justify-between gap-3 px-8">
                <li>
                  <del className="font-thin text-sm text-black">{tasks}</del>
                </li>
                <li className="ml-auto flex items-center justify-center gap-1">
                  <span className="text-blue-500 cursor-pointer">
                    <SlNote
                      onClick={() => {
                        updateFn(identity);
                      }}
                    />
                  </span>
                  <DeleteTask id={identity} />
                </li>
              </ul>
            ) : (
              <div className="w-full">
                <ul className="w-full flex items-center justify-start gap-3 px-8">
                  <li>
                    <span className="font-thin text-sm text-black">
                      {tasks}
                    </span>
                  </li>
                  <li className="ml-auto flex items-center justify-center gap-1">
                    <span className="text-blue-500 cursor-pointer">
                      <SlNote
                        onClick={() => {
                          updateFn(identity);
                        }}
                      />
                    </span>
                    <DeleteTask id={identity} />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Checklist;
