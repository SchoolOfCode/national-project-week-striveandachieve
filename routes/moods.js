import express from "express";
const router = express.Router();

import {getAllMoods} from "../models/moods.js"

/* GET moods listing. */
router.get("/", async function (req, res) {
  const allMoods = await getAllMoods();
  return res.json({ success: true, payload: allMoods });
});

export default router;
