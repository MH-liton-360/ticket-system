import { use } from "react";
import TicketCard from "./TicketCard";
import TicketActions from "./TicketActions";

const Customer_Tickets = ({ ticketsPromise }) => {
    const ticketsData = use(ticketsPromise);

    return (
        <section className="py-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {ticketsData.map((ticket) => (
                    <div
                        key={ticket.ticket_id}
                        className="grid grid-cols-12 gap-2 bg-gray-50 p-3 rounded-lg"
                    >
                        {/* TicketCard → left 8 columns */}
                        <div className="col-span-12 lg:col-span-8">
                            <TicketCard ticket={ticket} />
                        </div>

                        {/* TicketActions → right 4 columns */}
                        <div className="col-span-12 lg:col-span-4 flex flex-col justify-start gap-2">
                            <TicketActions ticket={ticket} />
                        </div>
                    </div>
                ))}
            </div>
        </section>


    );
};

export default Customer_Tickets;