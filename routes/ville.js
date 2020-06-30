var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET Ville page. */
router.get("/", function (req, res, next) {
  res.render("ville");
});

router.post("/", async (req, res, next) => {
  const nom_ville = req.body.nom_ville;

  await axios
    .get(`https://geocode.xyz/${nom_ville}?json=1`)
    .then((response) => {
      let longt = response.data.longt;
      let latt = response.data.latt;

      res.render("ville", { ville: nom_ville, latt: latt, longt: longt });
    })
    .catch((error) => {
      console.log(error);
      res.render("ville", {
        ville: nom_ville,
        latt: "latitude not found",
        longt: "longitude not found",
      });
    });
});

module.exports = router;
