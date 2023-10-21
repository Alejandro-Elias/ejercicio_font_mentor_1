const express = require("express");
const app = express();
const path = require("path");
const PORT = 3030;

app.use(express.statics(path.resolve(__dirname, "public")));

app.listen(3030, () => console.log(`Servido corriendo en http://localhost:${PORT}`));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/views/index.html")));