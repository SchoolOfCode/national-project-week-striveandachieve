import express from "express";
const router = express.Router();

import { addMood, getAllMoods, getMoodByWeek } from "../models/moods.js";

/* GET moods listing. If week query present than search db by week.  Otherwise get all results*/
router.get("/", async function (req, res) {
  const { week } = req.query;
  if (week) {
    const requestWeek = await getMoodByWeek(week);
    return res.json({ success: true, payload: requestWeek });
  }
  const allMoods = await getAllMoods();
  return res.json({ success: true, payload: allMoods });
});

//add new entry from the form to db
router.post("/", async function (req, res) {
  const newMood = req.body;
  await addMood(newMood);
  return res.json({ success: true, payload: newMood });
});

export default router;
