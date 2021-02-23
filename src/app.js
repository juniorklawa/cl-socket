const express = require("express");
const http = require("http");

const port = process.env.PORT || 8080;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: { methods: ["GET", "PATCH", "POST", "PUT"], origin: true },
});

let storagedText = "<p>The book is ___ the table</p>";

const connection = (socket) => {
  console.log("a new user with id " + socket.id + " has entered");

  socket.on("content", handleTextSent);
  socket.emit("newUser", storagedText);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  console.log(Object.keys(io.engine.clients));
};

io.on("connection", connection);

const handleTextSent = (data) => {
  storagedText = data;
  io.sockets.emit("content", data);
};

server.listen(port, () => console.log(`Listening on port ${port}`));
