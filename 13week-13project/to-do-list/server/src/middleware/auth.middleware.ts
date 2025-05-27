import { Request, Response, NextFunction } from "express";
import errorHelper from "../helper/error.helper";
import { verToken } from "../helper/jwt.helper";
import User from "../model/user.model";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      throw new errorHelper("access denied", 406);
    }

    if (
      authHeader &&
      authHeader.length > 2 &&
      !authHeader.startsWith("BEARER")
    ) {
      throw new errorHelper("access denied", 406);
    }

    const token = authHeader.split(" ")[1];

    const verified = verToken(token);

    if (!verified) {
      throw new errorHelper("access denied unauthorized user", 406);
    }

    const user = User.findById(verified.id);

    if (!user) {
      throw new errorHelper(
        "either the account is deleted or system failure please try again",
        406
      );
    }

    req.user = {
      id: verified.id,
      name: verified.name,
      email: verified.email,
      password: verified.password,
    };

    next();
  } catch (err) {
    next(err);
  }
};
