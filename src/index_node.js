const chokidar = require("chokidar");
const fs = require("fs");
const watcher = chokidar.watch("./log.dat");
const socketio = require("socket.io");
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);

app.use(cors());
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

const ioServer = server.listen(5001, () => {
  console.log("listening on *:3000");
});

const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  emitfunction();
});

function emitfunction() {
  io.emit("message", { name: "hello" });
}

const log = console.log;

watcher.on("add", (path) => {
  const data = fs.readFileSync("./log.dat", { encoding: "utf8", flag: "r" });
  io.emit("message", { name: data });
});

watcher.on("change", (path) => {
  const data = fs.readFileSync("./log.dat", { encoding: "utf8", flag: "r" });
  io.emit("message", { name: data });
});
