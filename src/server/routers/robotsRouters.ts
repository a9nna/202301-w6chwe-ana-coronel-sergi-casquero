import { Router } from "express";
import {
  createRobot,
  getRobotById,
  getRobots,
} from "../controllers/robotsControllers.js";

// eslint-disable-next-line new-cap
const robotsRouter = Router();

robotsRouter.get("/", getRobots);
robotsRouter.get("/:idRobot", getRobotById);
robotsRouter.post("/create", createRobot);

export default robotsRouter;
