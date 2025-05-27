import { NextFunction, Request, RequestHandler, Response } from "express";

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export const asyncHandler = (fun: Handler): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(fun(req, res, next)).catch((err) => next(err));
  };
};
