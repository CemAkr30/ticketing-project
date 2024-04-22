import {
  Publisher,
  Subjects,
  OrderCancelledEvent,
} from "@forincatickets30/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
