import jwt, { JwtPayload } from "jsonwebtoken";
import { IPayload } from "../types/payload.types";

const JWT_SECRET = process.env.JWT_SECRET ?? "";
const JWT_EXPIRY_DATE = process.env.JWT_EXPIRY_DATE;

// genterate token
export const genToken = (data: IPayload) => {
  return jwt.sign(data, JWT_SECRET, { expiresIn: JWT_EXPIRY_DATE as any });
};

// verify token
export const verToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
};
