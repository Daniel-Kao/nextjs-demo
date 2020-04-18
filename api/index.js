const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(1323, () => console.log("server running on 1323"));
