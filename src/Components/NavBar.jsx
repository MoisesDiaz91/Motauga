
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

function NavBar({ currentUser, logout , updateSearchText}) {

    if (!currentUser) {
        return (<>
            <>
                <div className='navigation-bar'>
                    <Link to="/" className="navigation-button"><h6>Home 🏠</h6></Link>
                    <h2><b>💧Motauga💧</b></h2>
                    <Link to="/login" className="navigation-button"><h6>Login</h6></Link>
                </div>
            </>
        </>)

    } else {
        return (
        <>
            <div className='navigation-bar' >
                <Link to="/" className="navigation-button"><h6>Home 🏠</h6></Link>
                <Link to="/juicepage" className="navigation-button"><h6>Beverages 🍹</h6></Link>
                <h2><b>💧Motauga💧</b></h2>
                <Link to="/strainpage" className="navigation-button"><h6>Strains 🌲</h6></Link>
                <Link to="/storepage" className="navigation-button"><h6>Stores 🏪</h6></Link>
                <Link to="/shoppingcart" className="navigation-button"><h6>ShoppingCart</h6></Link>
                <Link to="/profile/:profileID" className="navigation-button"><h6>Profile</h6></Link>
                <SearchBar updateSearchText={updateSearchText} />
                <button onClick={logout} className="navigation-button">Logout</button>
            </div>
        </>)
    }
}

export default NavBar

/*

    return (
        <div className='navigation-bar'>
            <Link to="/" className="navigation-button"><h6>Home 🏠</h6></Link>
            <Link to="/juicepage" className="navigation-button"><h6>Beverages 🍹</h6></Link>
            <h2><b>💧Motauga💧</b></h2>
            <Link to="/strainpage" className="navigation-button"><h6>Strains 🌲</h6></Link>
            <Link to="/storepage" className="navigation-button"><h6>Stores 🏪</h6></Link>
            <Link to="/login" className="navigation-button"><h6>Login</h6></Link>
        </div>
    )






        if (currentUser) {
        return (
            <>
                <div className='navigation-bar'>
                    <Link to="/" className="navigation-button"><h6>Home 🏠</h6></Link>
                    <h2><b>💧Motauga💧</b></h2>
                    <Link to="/login" className="navigation-button"><h6>Login</h6></Link>
                    <button onClick={logout} className="navigation-button">Logout</button>
                </div>
            </>)
    } else {
        <>
            <div>
                <Link to="/" className="navigation-button"><h6>Home 🏠</h6></Link>
                <Link to="/juicepage" className="navigation-button"><h6>Beverages 🍹</h6></Link>
                <h2><b>💧Motauga💧</b></h2>
                <Link to="/strainpage" className="navigation-button"><h6>Strains 🌲</h6></Link>
                <Link to="/storepage" className="navigation-button"><h6>Stores 🏪</h6></Link>
                <Link to="/shoppingcart" className="navigation-button">My Cart</Link>
                <button onClick={logout} className="navigation-button">Logout</button>
            </div>
        </>
    }

*/

