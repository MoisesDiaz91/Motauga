import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

function NavBar(){

    return(
        <div className='navigation-bar'>

            <NavLink to="/" className="navigation-button">Home 🏠</NavLink><br></br>
            <NavLink to="/juicepage" className="navigation-button">Beverages 🍹</NavLink><br></br>
            <h1>High There!</h1><br></br>
            <NavLink to="/strainpage" className="navigation-button">Strains 🌲</NavLink><br></br>
            <NavLink to="/storepage" className="navigation-button">Stores 🏪</NavLink>
        
            
        </div>
       
        )
}

export default NavBar