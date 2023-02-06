import express from "express";
import bodyParser from "body-parser";
import { connect } from "./config/database.js";
import v1Routes from "./routes/index.js";
import User from "./models/user.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", v1Routes);

app.listen(3000, async () => {
  console.log("server is started at port 3000");
  await connect();
  console.log("connected to mongodb server");
  // const response = new User({
  //   name: "Ashish sharma",
  //   password: "123456",
  //   email: "vincenzo@gmail.com",
  // });
  // response.save();
});
