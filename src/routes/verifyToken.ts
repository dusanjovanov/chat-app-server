import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import User from "../models/user";

const verifyToken = async (req: Request, res: Response) => {
  const token = req.cookies["jwt"];

  try {
    const { email, password } = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findOne({ email }).exec();

    if (user) {
      // check password
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (isPasswordMatch) {
        res.json(user);
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // invalid token
    res.sendStatus(401);
  }
};

export default verifyToken;
