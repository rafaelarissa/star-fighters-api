import express from "express";
import cors from "cors";
import battleRouter from "./routers/battleRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(battleRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Running on " + PORT);
});
