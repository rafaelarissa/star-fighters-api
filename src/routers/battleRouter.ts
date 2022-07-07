import { Router } from "express";
import * as battleController from "../controllers/battleController.js";

const battleRouter = Router();
battleRouter.post("/battle", battleController.battle);

export default battleRouter;
