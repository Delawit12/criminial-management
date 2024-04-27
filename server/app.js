import express from "express";
import cors from "cors";
import { HOST, PORT } from "./config/secrate.js";
import appRoute from "./route/index.js";

// express server
const server = express();
// cors true to accept any request from any where

server.use(cors({ origin: true }));

// to enable server to read JSON data
server.use(express.json());
server.get("/", (req, res) => {
  res.status(200).send("the server is running on the specified port");
});

server.use("/api", appRoute);

server.get("/test", (req, res) => {
  res.send("test url");
});

server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
