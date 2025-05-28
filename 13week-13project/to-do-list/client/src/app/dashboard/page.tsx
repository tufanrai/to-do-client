"use client";
import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const page = () => {
  const [show, setShow] = useState(false);

  const displayCard = () => {
    setShow(true);
  };
  const hideCard = () => {
    setShow(false);
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
            <form className="border-1 rounded-t-md border-slate-400">
              <input
                className="w-full px-3 py-1 rounded-t-md h-12 "
                type="text"
                placeholder="Title"
              />
              <input
                className="w-full px-3 py-1 h-9 text-sm font-thin"
                type="text"
                placeholder="Discription"
              />
              <div className="w-full flex gap-4 items-center justify-end border-t-1 border-slate-400 px-5 py-3">
                <button
                  onClick={hideCard}
                  type="reset"
                  className="px-3 py-1 border-1 rounded-sm text-sm font-thin text-slate-400 ease duration-200 hover:bg-slate-400 hover:text-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
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

export default page;
