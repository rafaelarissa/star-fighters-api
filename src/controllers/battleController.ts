import { Request, Response } from "express";

export async function battle(req: Request, res: Response) {
  const { firstUser, secondUser } = req.body;

  if (!firstUser || !secondUser) {
    res.sendStatus(422);
  }
}
