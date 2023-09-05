const express = require("express");
const controller = require("../controllers/validate");

const router = express.Router();

// router.post("/formProcess", function(req, res) {
//     console.log(req.body);
//     res.render("index", {
//         "clientVar": req.body.content 
//     })
// })

router.post("/formProcess", controller.form);

module.exports = router;