const router = require("express").Router();
const adminController = require("../controllers/adminController");
const categoryController = require('../controllers/categoryController')

router.get("/dashboard", adminController.viewDashboard);
router.get("/category", adminController.viewCategory);
router.get("/bank", adminController.viewBank);
router.get("/item", adminController.viewItem);
router.get("/booking", adminController.viewBooking);

// rute Category
router.get('/category', categoryController.getCategory);
router.post("/category", categoryController.createCategory);


module.exports = router;
