const express = require("express");
const path = require("path");

const app = new express();
app.set("view engine", "html");
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(3000);
console.log("Running on port 3000");