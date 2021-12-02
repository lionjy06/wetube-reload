import express from "express";

const app = express();
const PORT = 4000;
const handleListening = () => {
  console.log("server listening on port https://localhost:4000");
};

const gossipMiddleware = (req, res, next) => {
  console.log("I am in the middle");
  next();
};

const handleHome = (req, res, next) => {
  return res.send("I love middlewares");
};

app.get("/", gossipMiddleware, handleHome);

app.listen(PORT, handleListening);
