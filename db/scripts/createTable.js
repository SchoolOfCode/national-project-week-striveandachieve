import query from "../index.js";

const createTableString =
  "CREATE TABLE IF NOT EXISTS dailymood (id SERIAL PRIMARY KEY, userid INT, name TEXT, week INT, day INT, learned TEXT, revise TEXT, mood INT, feeling TEXT)";

async function createMoodTable() {
  const res = await query(createTableString);
  //added console output of what has been created
  console.log("Table Created", res);
}

createMoodTable();
