const categoryModels = require("../models/categoryModel");

async function getCategory(req, res) {
  const dataCategory = await categoryModels.getDataCategory();
  console.log(dataCategory);
}

async function createCategory(req, res) {
  const createData = req.body;
  const resultInsert = await categoryModels.addCategory(createData);

  if (resultInsert) {
    res.json({
      message: "category created successfully",
    });
  } else {
    res.json({
      message: "category created failed",
    });
  }
}

module.exports = { getCategory, createCategory };
