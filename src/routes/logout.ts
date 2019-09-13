import { Request, Response } from "express";

const logout = (req: Request, res: Response) => {
  res.clearCookie("jwt").sendStatus(200);
};

export default logout;
