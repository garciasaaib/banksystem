import express from "express";
import middleWares from "./middlewares";
import routes from "./routes";

const server = express();

server.use(middleWares);
server.use('/api/', routes);

module.exports = server;
