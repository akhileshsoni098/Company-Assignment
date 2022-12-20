const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const BookController= require("../controllers/bookController5")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/autherName", BookController.createAuther )
router.post("/BookName", BookController.createBook)
router.get("/bookListById", BookController.bookListById)
router.get("/updatePrice", BookController.updatePrice)
router.get("/bookFindByPrice", BookController.bookFindByPrice)







module.exports = router;