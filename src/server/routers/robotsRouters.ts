import { Router } from "express";
import { getRobots } from "../controllers/robotsControllers.js";

// eslint-disable-next-line new-cap
const robotsRouter = Router();

robotsRouter.get("/", getRobots);

export default robotsRouter;
