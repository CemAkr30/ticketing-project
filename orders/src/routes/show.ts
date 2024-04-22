import express, { Request, Response } from "express";
import {
  NotAuthorizedError,
  NotFoundError,
  requireAuth,
} from "@forincatickets30/common";
import { Order } from "../models/order";

const router = express.Router();

router.get(
  "/api/orders/:orderId",
  requireAuth,
  async (req: Request, res: Response) => {
    const orderId = req.params.orderId;
    const existingOrder = await Order.findById(orderId).populate("ticket");
    if (!existingOrder) {
      throw new NotFoundError();
    }

    if (existingOrder.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    res.status(200).send(existingOrder);
  }
);

export { router as showOrderRouter };
