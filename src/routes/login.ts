import bcrypt from "bcrypt";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) return res.sendStatus(400);

  try {
    const user = await User.findOne({
      email: req.body.email
    }).exec();

    if (user) {
      //check password
      const isPasswordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (isPasswordMatch) {
        const token = jwt.sign(
          { email: req.body.email, password: req.body.password },
          process.env.SECRET_KEY
        );

        res
          .cookie("jwt", token, { httpOnly: true })
          .status(200)
          .json(user);
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export default login;
