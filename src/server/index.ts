import express from "express";
import morgan from "morgan";
import { notFoundError } from "./middleware/errorMiddlewares.js";
import { robotsRouter } from "./routers/robotsRouters.js";

const app = express();
app.use(morgan("dev"));

app.use("/", notFoundError, robotsRouter);

export default app;
