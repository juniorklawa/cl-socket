const express = require("express");
const http = require("http");
const cors = require("cors");

const port = process.env.PORT || 8080;
const index = require("./routes/index");

const app = express();
app.use(cors());
app.use(index);

const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: { methods: ["GET", "PATCH", "POST", "PUT"], origin: true },
});

let storagedText = "";

let storagedDrawing = {};

const connection = (socket) => {
  socket.on("content", (data) => handleTextSent(data, socket));
  socket.on("drawing", (data) => handleDrawing(data, socket));
  socket.emit("newUser", storagedText);
  socket.emit("newDrawerUser", storagedDrawing);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  console.log(Object.keys(io.engine.clients));
};

io.on("connection", connection);

const handleTextSent = (data, socket) => {
  storagedText = data;
  io.sockets.emit("content", data);
};

const handleDrawing = (data, socket) => {
  console.log(data);

  socket.broadcast.emit("drawing", data);
  storagedDrawing = data;
};

server.listen(port, () => console.log(`Listening on port ${port}`));
