import { Request, Response } from "express";
import { asyncHandler } from "../helper/asyncHandler";
import errorHelper from "../helper/error.helper";
import List from "../model/list.model";

// create task
export const createList = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.user;
  const data = req.body;

  if (!data) {
    throw new errorHelper("please fill the required data", 406);
  }

  const list = await List.create({ user: id, ...data });

  res.status(200).json({
    message: "list successfully created",
    status: "success",
    data: list,
    success: true,
  });
});

// read task
export const readList = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.user;

  const list = await List.find({ user: id });

  if (!list) {
    throw new errorHelper("you do not have any taks", 404);
  }

  res.status(200).json({
    message: "tasks found",
    status: "success",
    data: list,
    success: true,
  });
});

// update task
export const updateList = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.user;
  const { _id, title, progress, discription } = req.body;

  if (!_id) {
    throw new errorHelper("please enter the list id", 406);
  }

  const list = await List.findOne({ _id, user: id });

  if (!list) {
    throw new errorHelper("list is not found", 404);
  }

  if (title) list.title = title;
  if (progress) list.progress = progress;
  if (discription) list.disc = discription;

  list.save();

  res.status(200).json({
    message: "task successfully updated",
    status: "success",
    data: list,
    success: true,
  });
});

// delete task
export const remList = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.user;
  const { _id } = req.body;

  if (!_id) {
    throw new errorHelper("please enter the id", 406);
  }

  List.findOneAndDelete({ _id, user: id });

  res.status(200).json({
    message: "task successfully deleted",
    status: "success",
    success: true,
  });
});
