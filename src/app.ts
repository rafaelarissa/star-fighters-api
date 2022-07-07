import express from "express";
import cors from "cors";
import battleRouter from "./routers/battleRouter";

const app = express();
app.use(cors());
app.use(express.json());

app.use(battleRouter);

export default app;
