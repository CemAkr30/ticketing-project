import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@forincatickets30/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
