import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@forincatickets30/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
