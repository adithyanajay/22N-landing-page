import { hamburger, logo } from "../assets"

function Navbar() {
  return (
    <nav className="fixed w-full py-10 px-7 flex justify-between items-center">
      <div className="logo">
        <img src={logo} alt="22N logo" />
      </div>
      <div className="hamburger-menu"><img src={hamburger} alt="hamburger" /></div>
    </nav>
  )
}

export default Navbar
