var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
  res.render("ville", { nom_ville: req.body.nom_ville });
});

module.exports = router;
