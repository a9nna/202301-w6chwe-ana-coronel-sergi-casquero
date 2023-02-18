import { model, Schema } from "mongoose";

const robotsSchema = new Schema({
  name: String,
  image: String,
  stats: {
    speed: Number,
    endurance: Number,
    creationDate: Date,
  },
});

const Robot = model("Robot", robotsSchema, "robots");

export default Robot;
