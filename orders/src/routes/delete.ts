import express, { Request, Response } from "express";
import { Order } from "../models/order";
import {
  NotAuthorizedError,
  NotFoundError,
  OrderStatus,
  requireAuth,
} from "@forincatickets30/common";
import { OrderCancelledPublisher } from "../events/publishers/order-cancelled-publisher";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.delete(
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

    existingOrder.status = OrderStatus.Cancelled;
    await existingOrder.save();

    // publishing an event saying this was cancelled!
    new OrderCancelledPublisher(natsWrapper.client).publish({
      id: existingOrder.id,
      version: existingOrder.version,
      ticket: {
        id: existingOrder.ticket.id,
      },
    });

    res.status(204).send(existingOrder);
  }
);

export { router as deleteOrderRouter };
