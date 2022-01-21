import query from "../index.js";

const deleteTableString = "DELETE FROM dailymood";

async function deleteTable() {
  const res = await query(deleteTableString);
  //Added console output to show what table has been deleted
  console.log("Table Deleted", res);
}

deleteTable();
