import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
import cors from "cors";

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors({origin: "*",}));
app.use(express.json());
app.use("/notes", router);
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://root:root@cluster0.fsxob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    app.listen(PORT, () => {
      console.log("server started at port " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
