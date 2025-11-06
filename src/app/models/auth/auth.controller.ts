import type { Request, Response } from "express";


const CreateAuthController = async (req: Request, res: Response) => {
  try {
    const auth = await (req.body);
    res.status(201).json({
      success: true,
      massage: "login successfully",
      data: auth
    });
  } catch (error) {
    console.log(error)
  }
}

export const AuthController = {
  CreateAuthController
}