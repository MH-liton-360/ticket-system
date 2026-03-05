import { Suspense, useState } from 'react'
import './App.css'
import Customer_Tickets from './Components/Customer_Tickets'
import Progress_Resolve_Banner from './Components/Progress_Resolve_Banner'
import Footer from './Share/Footer'
import Navbar from './Share/Navbar'
import TicketActions from './Components/TicketActions'


const fetchTickets = async () => {
  const res = await fetch("/cs_tickets.json")
  return res.json();
}


function App() {

  const ticketsPromise = fetchTickets();

  // step: 01 
  const [inProgress, setInProgress] = useState([]);

  // step: 02 
  const [resolved, setResolved] = useState([]);

  // step: 03
  const handleAddTask = (ticket) => {
    setInProgress([...inProgress, ticket]);
  };

  // step: 04
  const handleComplete = (ticket) => {

    // remove inprogress from 
    const updated = inProgress.filter(t => t.ticket_id !== ticket.ticket_id);
    setInProgress(updated);

    // adding Resolve 
    setResolved([...resolved, ticket]);
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* Main Content */}
      <div className="grow max-w-7xl mx-auto w-full">

        <Navbar />

        <Progress_Resolve_Banner
          inProgress={inProgress}
          resolved={resolved}
        ></Progress_Resolve_Banner>

        <div className='flex'>
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
          }>
            <Customer_Tickets
              ticketsPromise={ticketsPromise}
              handleAddTask={handleAddTask}

            />

          </Suspense>

          <TicketActions
            inProgress={inProgress}
            resolved={resolved}
            handleComplete={handleComplete}
          ></TicketActions>
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App