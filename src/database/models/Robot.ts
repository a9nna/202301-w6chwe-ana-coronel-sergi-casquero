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

robotsSchema.virtual("id").get(function () {
  return this._id;
});

robotsSchema.set("toJSON", { virtuals: true });

const Robot = model("Robot", robotsSchema, "robots");

export default Robot;
