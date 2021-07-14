import react from 'react'
import Logo from '../project resources/logo.png'

 function Navbar() {
     return(
         <>
            <nav className="fixed z-10 h-screen w-14 bg-black flex items-center justify-center">
                <img src={Logo} alt="logo" />
            </nav>
         </>
     )
 }

export default Navbar;