import { NavLink } from "react-router-dom"
import Strain from "../Components/Strain"
import SearchBar from "../Components/SearchBar"

function StrainPage({strains, updateSearchText}){
    
    const strainCardComponents = strains.map(strain=>{
        return <Strain key={strain.id} strain={strain} />
    })

    return(
        <div className='strain-page'>
            <div className='navigation-bar'>
                <NavLink to="/">Home 🏠</NavLink><br></br>
                <NavLink to="/juicepage">Beverages 🍹</NavLink><br></br>
                <NavLink to="/storepage">Stores 🏪</NavLink>
                <NavLink to="/ShoppingCart" >Shopping Cart 🛒</NavLink>
                <SearchBar updateSearchText={updateSearchText} />
            </div>

            <div className="shopStrains">
                 <ol>
                    {strainCardComponents}
                </ol>
            </div>

        </div>
    )
}

export default StrainPage