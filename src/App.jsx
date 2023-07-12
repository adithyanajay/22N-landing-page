import CalendarLinks from "./components/CalendarLinks"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <div className="app bg-color-bg-black">
      <Navbar />
      <Hero />
      <section className="px-5">
      <CalendarLinks />
      </section>
      
    </div>
  )
}

export default App
