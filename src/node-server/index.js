const app = require("./server/express");
const http = require("http");

const mongoConnection = require("./server/mongoDb");
const { port } = require("./utils/config");

// Connect database
mongoConnection();

// Create express server
const server = http.createServer(app);
const serverPort = port || 4000;

// Listen server
server.listen(serverPort);
