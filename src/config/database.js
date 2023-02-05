import mongoose from "mongoose";

export const connect = () => {
  mongoose.connect("mongodb://localhost/twitter_Dev");
};
