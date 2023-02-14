const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/hotels", function (req, res) {
  const filePath = path.join(__dirname, "data", "hotels.json");

  const fileData = fs.readFileSync(filePath);
  const storedHotels = JSON.parse(fileData);

  res.render("hotels", {
    numberHotels: storedHotels.length,
    hotels: storedHotels,
  });
});

app.get("/recommend", function (req, res) {
  res.render("recommend");
});

app.post("/recommend", function (req, res) {
  const hotel = req.body;
  const filePath = path.join(__dirname, "data", "hotels.json");

  const fileData = fs.readFileSync(filePath);
  const storedHotels = JSON.parse(fileData);

  storedHotels.push(hotel);

  fs.writeFileSync(filePath, JSON.stringify(storedHotels));

  res.redirect("/confirm");
});

app.get("/confirm", function (req, res) {
  res.render("confirm");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000);
