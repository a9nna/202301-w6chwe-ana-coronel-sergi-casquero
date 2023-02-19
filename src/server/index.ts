import express from "express";
import morgan from "morgan";
import { generalError, notFoundError } from "./middleware/errorMiddlewares.js";
import robotsRouter from "./routers/robotsRouters.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());
app.use("/robots", robotsRouter);

app.use(notFoundError);
app.use(generalError);

export default app;
