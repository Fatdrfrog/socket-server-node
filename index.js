const { WebSocketServer } = require("ws");
const { uuid } = require("uuidv4");
const http = require("http");

const server = http.createServer();
const wsServer = new WebSocketServer({ server });

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});

const clients = {};

wsServer.on("connection", (connection) => {
  clients[uuid()] = connection;
  console.log("Client new: ");
  console.log(clients);
});
