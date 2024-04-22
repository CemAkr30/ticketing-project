import { Message } from "node-nats-streaming";
import { Listener } from "@forincatickets30/common";
import { TicketCreatedEvent } from "@forincatickets30/common";
import { Subjects } from "@forincatickets30/common";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated; // subject: Subjects.TicketCreated
  queueGroupName = "payments-service";

  onMessage(data: TicketCreatedEvent["data"], msg: Message): void {
    console.log("Event Data!", data);

    console.log(data.id + "/" + data.price + "/" + data.title);

    msg.ack();
  }
}
