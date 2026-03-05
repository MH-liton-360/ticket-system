import { Suspense } from 'react'
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

  return (
    <div className="min-h-screen flex flex-col">

      {/* Main Content */}
      <div className="grow max-w-7xl mx-auto w-full">

        <Navbar />

        <Progress_Resolve_Banner />

        <div className='flex'>
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
          }>
            <Customer_Tickets ticketsPromise={ticketsPromise} />

          </Suspense>

          <TicketActions></TicketActions>
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App