import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = 3000;
const app = express();
const address = `http://localhost:${port}/${process.env.PROJECT_NAME}`;
app.use(express.static("dist"));
app.listen(port, () => {
  console.log(`Dev server listening at ${address}`);
});