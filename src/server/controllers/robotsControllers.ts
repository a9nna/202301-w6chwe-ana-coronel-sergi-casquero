import { type NextFunction, type Request, type Response } from "express";
import Robot from "../../database/models/Robot.js";
import CustomError from "../CustomError.js";
import { type RobotStructure } from "../types.js";

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

export const createRobot = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    RobotStructure
  >,
  res: Response,
  next: NextFunction
) => {
  try {
    const newRobot = req.body;
    await Robot.create(newRobot);

    res.status(201).json({ newRobot });
  } catch (error) {
    const customError = new CustomError(
      error.message,
      400,
      "Couldn't create your new robot"
    );
    next(customError);
  }
};
