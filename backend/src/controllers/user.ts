import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  console.log(req.body, 'body')
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res
        .status(409)
        .json({ message: "User already exists with this email" });

    const salt = bcrypt.genSaltSync(12);

    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT ?? "",
      { expiresIn: "1h" }
    );
    res.status(201).json({ email: newUser.email, name: newUser.name, token });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json("user with this email not found");

    const iscorrectPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!iscorrectPassword) return res.status(404).json("incorrect password");

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWt ?? "",
      { expiresIn: "1hr" }
    );
    res
      .status(200)
      .json({ email: existingUser.email, name: existingUser.name, token });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
