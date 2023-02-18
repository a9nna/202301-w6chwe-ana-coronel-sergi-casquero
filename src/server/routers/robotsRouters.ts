import { Router } from "express";
import { getRobots } from "../controllers/robotsControllers.js";
import { notFoundError } from "../middleware/errorMiddlewares.js";

// eslint-disable-next-line new-cap
export const robotsRouter = Router();

robotsRouter.get("/robots", notFoundError, getRobots);
