import query from "../db/index.js";

export async function getAllMoods() {
  const data = await query(`SELECT * FROM dailymood`);
  return data.rows;
}

export async function addMood(newMood) {
    const data = await query(`INSERT INTO dailymood (userid, name, week, day, learned, revise, mood, feeling) VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,[newMood.userid, newMood.name, newMood.week, newMood.day, newMood.learned, newMood.revise, newMood.mood, newMood.feeling]);
    return data.rows;
}

export async function getMoodByWeek(requestWeek) {
    const data = await query(`SELECT * FROM dailymood WHERE week=$1`, [requestWeek]);
    return data.rows;
}