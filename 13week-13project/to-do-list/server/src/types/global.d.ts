import { IPayload } from "./payload.types";

declare global {
  namespace Express {
    interface Request {
      user: IPayload;
    }
  }
}
