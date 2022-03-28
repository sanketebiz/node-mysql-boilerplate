import express from "express";
import { config } from "dotenv";
const app = express();
config();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("success");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
