const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "print-media-queries")));
app.use(express.static(path.join(__dirname, "text-gradiant")));

app.get("/text-gradiant", async (req, res) => {
  res.sendFile(path.join(__dirname, "text-gradiant", "index.html"));
});
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "print-media-queries", "index.html"));
});

app.listen(8080, () => {
  console.log("server running on port 8080");
});
