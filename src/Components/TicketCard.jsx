const TicketCard = ({ ticket }) => {

    const { ticket_id, title, status, description, priority } = ticket;
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col justify-between w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">{title}</h2>
                <button type="button">{status}</button>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4">
                {description}
            </p>

            {/* Priority */}
            <div className="mb-2">
                <h3>{ticket_id}</h3>
                <span className="text-red-600 font-bold">{priority} </span>
            </div>

            {/* Assignment */}
            <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Assigned to: <strong>Sarah Johnson</strong></span>
                <span>Date: 1/16/2024</span>
            </div>
        </div>
    );
};

export default TicketCard;
