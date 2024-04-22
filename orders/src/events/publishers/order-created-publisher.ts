import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@forincatickets30/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
