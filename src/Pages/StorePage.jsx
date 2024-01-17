import { NavLink } from "react-router-dom"
import Store from "../Components/Store"
import SearchBar from "../Components/SearchBar"

function StorePage({stores, updateSearchText}){

    const storeCardComponents = stores.map(store =>{
        return <Store key={store.id} store={store}/>
    })

    return(
        <div className='store-page'>
            <div className='navigation-bar'>
                <NavLink to="/">Home 🏠</NavLink><br></br>
                <NavLink to="/juicepage">Beverages 🍹</NavLink><br></br>
                <NavLink to="/strainpage">Strains 🌲</NavLink>
                <SearchBar updateSearchText={updateSearchText} />
            </div>

             <div className="store-list">
                <ol>
                   {storeCardComponents}
               </ol>
             </div>
            
        </div>
    )
}

export default StorePage