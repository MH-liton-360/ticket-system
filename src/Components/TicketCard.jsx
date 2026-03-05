const TicketCard = ({ ticket }) => {

    const { ticket_id, title, status, description, priority, assigned_to, date } = ticket;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body relative">

                {/* Status Top Right */}
                <p className="absolute top-4 right-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {status}
                </p>

                {/* Title */}
                <h2 className="font-semibold pr-20">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-500">
                    {description}
                </p>

                {/* Bottom Info */}
                <div className="flex items-center gap-3 text-sm">
                    <h3>#{ticket_id}</h3>
                    <p className="text-red-500 font-medium">{priority}</p>

                    <div className="flex gap-3 ml-auto">
                        <p>{assigned_to}</p>
                        <p>{date}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TicketCard;