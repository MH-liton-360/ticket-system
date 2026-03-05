const TicketActions = ({ inProgress, resolved, handleComplete }) => {

    return (

        <div className="w-80 p-5">

            {/* In Progress */}
            <div className="mb-10">

                <h3 className="text-xl font-bold mb-3">
                    In Progress ({inProgress.length})
                </h3>

                {inProgress.map((task) => (

                    <div
                        key={task.ticket_id}
                        className="border p-3 rounded mb-2"
                    >

                        {/* Ticket Title */}
                        <p>{task.title}</p>

                        {/* Complete Button */}
                        <button
                            onClick={() => handleComplete(task)}
                            className="btn btn-sm btn-success mt-2"
                        >
                            Complete
                        </button>

                    </div>

                ))}

            </div>


            {/* Resolved */}
            <div>

                <h3 className="text-xl font-bold mb-3">
                    Resolved ({resolved.length})
                </h3>

                {resolved.map((task) => (

                    <div
                        key={task.ticket_id}
                        className="border p-2 rounded mb-2 bg-green-100"
                    >

                        {task.title}

                    </div>

                ))}

            </div>

        </div>
    );
};

export default TicketActions;