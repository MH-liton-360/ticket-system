import { use } from "react";
import TicketCard from "./TicketCard";

const Customer_Tickets = ({ ticketsPromise, handleAddTask }) => {
    const ticketsData = use(ticketsPromise);

    return (
        <section className="py-4">
            <h3 className="text-2xl font-semibold text-blue-800 pl-3">Customer Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
                {ticketsData.map((ticket) => (
                    <div
                        key={ticket.ticket_id}

                        onClick={() => handleAddTask(ticket)}

                        className="grid grid-cols-12 p-1 rounded-lg cursor-pointer"
                    >
                        {/* TicketCard → left 8 columns */}
                        <div className="col-span-12 lg:col-span-8">
                            <TicketCard ticket={ticket} />
                        </div>

                    </div>
                ))}
            </div>
        </section>


    );
};

export default Customer_Tickets;