import Juice from '../Components/Juice';
import { NavLink } from "react-router-dom"
import SearchBar from '../Components/SearchBar';


function JuicePage({juices, updateSearchText}){
    
    const juiceCardComponents = juices.map(juice =>{
        return <Juice key={juice.id} juice={juice} />
      })
      
      return(
        <div className='juice-page'>
            <div className='navigation-bar'>
                <NavLink to="/">Home 🏠</NavLink><br></br>
                <NavLink to="/strainpage">Strains 🌲</NavLink><br></br>
                <NavLink to="/storepage">Stores 🏪</NavLink>
                <NavLink to="/ShoppingCart">Shopping Cart 🛒</NavLink>
                <SearchBar updateSearchText={updateSearchText} />
            </div>
            

            <div className="products">
                <ol>
                    {juiceCardComponents}
                </ol>
            </div> 

        </div>
    )
}

export default JuicePage