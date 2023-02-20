import { type NextFunction, type Response, type Request } from "express";
import CustomError from "../CustomError.js";
import createDebug from "debug";

const debug = createDebug("server:middleware:auth");

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new CustomError(
    "Resource not found",
    404,
    "Endpoint not found"
  );
  next(error);
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  debug(error.message);

  res
    .status(error.statusCode || 500)
    .json({ error: error.publicMessage || "Something failed" });
};
