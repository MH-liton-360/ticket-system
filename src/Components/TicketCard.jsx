const TicketCard = ({ ticket }) => {

    const { ticket_id, title, status, description, priority, assigned_to, date } = ticket;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">

                <div className="flex gap-24">
                    <h2>{title} </h2>
                    <p>{status}</p>
                </div>
                <p>{description} </p>

                <div className="flex gap-3">
                    <h3>#{ticket_id}</h3>
                    <p className="text-amber-700">{priority} </p>
                    <div className="flex gap-3">
                        <p>{assigned_to}</p>
                        <p>{date}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TicketCard;
