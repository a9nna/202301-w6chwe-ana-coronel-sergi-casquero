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
      let errorMessage;

      if (error.code === "EADDRINUSE") {
        errorMessage = `Error on starting the server. The port ${port} is already in use`;
      }

      reject(new Error(errorMessage));
    });
  });
