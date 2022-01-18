import query from "../index.js";

const deleteTableString = "DELETE FROM dailymood";

async function deleteTable() {
  const res = await query(deleteTableString);
}

deleteTable();
