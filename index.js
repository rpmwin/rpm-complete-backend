import express from "express";
import dotenv from "dotenv";
import router from "./src/router/routes.js";
import bingoRouter from "./src/router/bingo/routes.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use("/", router);
app.use("/bingo", bingoRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
