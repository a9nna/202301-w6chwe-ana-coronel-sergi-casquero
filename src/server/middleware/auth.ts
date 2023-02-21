import "../../loadEnvironment.js";
import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../CustomError.js";
import jwt from "jsonwebtoken";

const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.header("Authorization")) {
    const customError = new CustomError(
      "Not a valid authentication",
      401,
      "Not a valid authentication"
    );

    next(customError);
    return;
  }

  if (!req.header("Authorization")?.includes("Bearer")) {
    const customError = new CustomError(
      "Not a valid token",
      401,
      "Not a valid token"
    );
    next(customError);
    return;
  }

  const token = req.header("Authorization")?.replace(/^Bearer /, "");

  const payload = jwt.verify(token!, process.env.SECRET_KEY!);
};

export default auth;
