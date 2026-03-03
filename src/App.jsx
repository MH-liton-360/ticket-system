
import './App.css'
import Customer_Tickets from './Components/Customer_Tickets'
import Progress_Resolve_Banner from './Components/Progress_Resolve_Banner'
import Footer from './Shared/Footer'
import Navbar from './Shared/Navbar'

function App() {

  return (
    <>
      <section className=''>

        <div className="max-w-7xl mx-auto">

          {/* Navbar  */}
          <Navbar></Navbar>

          {/* Progress_Resolve_Banner  */}
          <Progress_Resolve_Banner></Progress_Resolve_Banner>

          {/* Customer_Tickets  */}
          <Customer_Tickets></Customer_Tickets>
        </div>
        <Footer></Footer>
      </section>
    </>
  )
}

export default App
