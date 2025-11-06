import type { Request, Response } from "express";
import { PaymentService } from "./payment.service.js";

const CreatePaymentController = async (req: Request, res: Response) => {
  try {
    const payment = await PaymentService.CreatePaymentService(req.body);
    res.status(201).json({
      success: true,
      massage: "payment created successfully",
      data: payment
    });
  } catch (error) {
    console.log(error)
  }
}

export const PaymentController = {
  CreatePaymentController
}