const express = require("express");
const cors = require("cors");
const hotels = require("./data/hotels.json");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("vercel server first is runing");
});

app.get("/hotels", (req, res) => {
  res.send(hotels);
});

app.get("/hotels/:id", (req, res) => {
  //   const id = req.params.id;
  const id = parseInt(req.params.id);
  const hotel = hotels.find((ht) => ht.id === id);
  res.send(hotel);
});

app.listen(port, () => {
  console.log(`vercel server is runing on port, ${port}`);
});
