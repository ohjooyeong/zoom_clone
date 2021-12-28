import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();
console.log(path.join(__dirname, "/public"));
console.log(__dirname);
console.log(__dirname + "/src/public");

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen);
