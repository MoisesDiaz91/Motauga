import React from 'react';
import AddCartButton from '../Components/AddCartButton';
import FavoriteButton from '../Components/FavoriteButton';
import { useOutletContext } from 'react-router-dom';


function JuicePage({ juicesData, updateCart }) {

console.log(juicesData) //returning array of objects
   
const {currentUser} = useOutletContext()
    
    const juiceItems = juicesData.map((juice) => {
        //  console.log("Hit This", juice)// Mapping the objects within the array

        const { id, name, collab, flavor, price, image } = juice

        console.log(id, name, collab, flavor, price, image )
        return (
            <div key={id} id={id}className="product">
                <img src={image} alt={name} width="200px"  border="2" /> <br></br>
                <div className="description">
                    <p><b>Collab With:</b> <i><u>{collab}</u></i></p>
                    <p><b>Juice Name:</b> {name}</p>
                    <p><b>Flavor:</b> {flavor}</p>
                    <p><b>Price:</b> {price}</p>
                </div>
                {currentUser ? <AddCartButton juiceID={id} updateCart={updateCart}/> : null}
                {currentUser ? <FavoriteButton juiceID={id}/>: null}
                
            </div>

        )  
    })

    return (
        <div className='juice-page'>
            <div className="shopTitle">
                <h1>Brand Collaboration</h1>
            </div>

            <div className="products">
                {juiceItems}
            </div>

        </div>
    )
}

export default JuicePage