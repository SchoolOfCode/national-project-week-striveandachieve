import express from "express";
import path from "path";

import __dirname from "./dirname.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";

import moodsRouter from "./routes/moods.js";

app.use(cors())

export const sampleData = [
  { userid: 1,
    name: "Grace",
    week: 1,
    day: 1,
    learned: "APIs",
    revise: "Array Methods",
    mood: 3,
    feeling: "I am tired",
  },
  {
    userid: 1,
    name: "Grace",
    week: 1,
    day: 2,
    learned: "REACT",
    revise: ".env",
    mood: 2,
    feeling: "I still am tired",
  }
];

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/moods", moodsRouter);

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

export default app;
