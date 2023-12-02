const Category = require("../models/categoryModel");

module.exports = {
  viewDashboard: (req, res) => {
    res.render("../views/admin/dashboard/view_dashboard.ejs");
  },

  viewCategory: async (req, res) => {
    const category = await Category.getDataCategory();
    // console.log(category);
    res.render("../views/admin/category/view_category.ejs", { category });
  },

  viewBank: (req, res) => {
    res.render("../views/admin/bank/view_bank.ejs");
  },

  viewItem: (req, res) => {
    res.render("../views/admin/item/view_item.ejs");
  },

  viewBooking: (req, res) => {
    res.render("../views/admin/booking/view_booking.ejs");
  },
};
