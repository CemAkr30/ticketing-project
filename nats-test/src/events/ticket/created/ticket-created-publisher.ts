import { Publisher } from "@forincatickets30/common";
import { TicketCreatedEvent } from "@forincatickets30/common";
import { Subjects } from "@forincatickets30/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated; // subject: Subjects.TicketCreated
}
