import { type NextFunction, type Request, type Response } from "express";
import Robot from "../../database/models/Robot.js";
import CustomError from "../CustomError.js";

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const robots = await Robot.find().exec();
    res.status(200).json({ robots });
  } catch (error) {
    const customError = new CustomError(
      error.message,
      500,
      "Couldn't find robots "
    );
    next(customError);
  }
};

export const getRobotById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { idRobot } = req.params;

  try {
    const robot = await Robot.findById(idRobot).exec();

    res.status(200).json({ robot });
  } catch (error) {
    next(new CustomError(error.message, 500, "Couldn't retrieve the robot"));
  }
};
