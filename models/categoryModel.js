const db = require("./db");

async function getDataCategory() {
  const getAllData = await db.select("*").from("category");
  return getAllData;
}

async function addCategory(newCategory) {
  const createData = await db("category").insert(newCategory);
  return createData;
}

module.exports = { getDataCategory, addCategory };
