import mongoose from "mongoose";
import createDebug from "debug";
import chalk from "chalk";

const debug = createDebug("database");

const connectDatabase = async (url: string) => {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(url);

    debug(chalk.bgGreen("Connected to database"));
  } catch (error) {
    debug(error);
  }
};

export default connectDatabase;
