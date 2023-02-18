import chalk from "chalk";
import createDebug from "debug";
import app from "./index.js";
import type CustomError from "./CustomError";

const debug = createDebug("server");

export const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.bgGreen(`Start with server 'http://localhost:${port}'`));
      resolve(server);
    });

    server.on("error", (error: CustomError) => {
      if (error.code === "EADDRINUSE") {
        debug(chalk.bgRed("Server is already used, please use another one"));
      }
    });
  });
