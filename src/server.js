import express from "express";
import morgan from "morgan";
const app = express();
const PORT = 4000;
const handleListening = () => {
  console.log("server listening on port https://localhost:4000");
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};
app.use(morgan("dev"));
app.get("/", handleHome);

app.listen(PORT, handleListening);
