import express from "express";
import morgan from "morgan";
import { generalError, notFoundError } from "./middleware/errorMiddlewares.js";
import { robotsRouter } from "./routers/robotsRouters.js";

const app = express();
app.use(morgan("dev"));

app.use("/robots", robotsRouter);

app.use(notFoundError);
app.use(generalError);

export default app;
