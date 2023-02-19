import { Router } from "express";
import { getRobotById, getRobots } from "../controllers/robotsControllers.js";

// eslint-disable-next-line new-cap
const robotsRouter = Router();

robotsRouter.get("/", getRobots);
robotsRouter.get("/:idRobot", getRobotById);

export default robotsRouter;
