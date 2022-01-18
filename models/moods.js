import query from "../db/index.js";

export async function getAllMoods() {
const data = await query(`SELECT * FROM dailymood`);
return data.rows;
};