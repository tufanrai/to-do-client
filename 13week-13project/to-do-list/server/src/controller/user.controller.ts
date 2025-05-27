import { Request, Response } from "express";
import { asyncHandler } from "../helper/asyncHandler";
import errorHelper from "../helper/error.helper";
import User from "../model/user.model";
import { comPass, hasPass } from "../helper/bcrypt.helper";
import { genToken, verToken } from "../helper/jwt.helper";

// registe or signup user
export const SignUp = asyncHandler(async (req: Request, res: Response) => {
  const { password, ...data } = req.body;

  if (!password) {
    throw new errorHelper("please enter passwrod", 406);
  }

  if (!data) {
    throw new errorHelper(
      "required datas have not completely been filled",
      406
    );
  }

  const hashedPass = await hasPass(password);

  const user = await User.create({ password: hashedPass, ...data });

  res.status(200).json({
    message: "user successfully created",
    status: "success",
    data: user,
    success: true,
  });
});

// login user
export const LogUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new errorHelper("please enter all the required datas", 406);
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new errorHelper("user does not exist", 404);
  }

  const verPass = comPass(password, user.password);

  if (!verPass) {
    throw new errorHelper("wrong email or password", 406);
  }

  const token = genToken({
    id: user._id,
    name: user.name,
    email: user.email,
    password: user.password,
  });

  res.status(200).json({
    message: "successfully loged in ",
    status: "success",
    data: user,
    success: true,
    access_token: token,
  });
});

// update user id
export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const { id } = req.user;

  const user = await User.findOne({ _id: id });

  if (!user) {
    throw new errorHelper("user does not exists", 406);
  }

  if (name) user.name = name;
  if (email) user.email = email;
  if (password) user.password = password;

  user.save();

  res.status(200).json({
    message: "user data successfully updated",
    status: "success",
    data: user,
    success: true,
  });
});

// remove or delete user
export const remUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.user;

  User.findByIdAndDelete(id);

  res.status(200).json({
    message: "successfully deleted user",
    status: "success",
    success: true,
  });
});
