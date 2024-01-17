import React from "react";
import AddCartButton from './AddCartButton';
import FavoriteButton from './FavoriteButton'

const removeJuice = () => {
    console.log("hello")
}

function Juice({juice}){
    return(
        <div className="juice-card">
            <br></br>
            <div className="product">
                    <img src={juice.image} alt={juice.name} width="200px" border="2"/> <br></br>
                    <button onClick={() => console.log(juice.name + " is my favorite juice!")} className="favorite-button" variant="primary">❤️️</button>

                    <button onClick={() => console.log("add")} className="add-button" variant="primary">Add Item</button>
                    <button onClick={() => removeJuice()} className="delete-button" variant="primary">Delete from cart</button>
            
                <div className="description">
                    <li>
                      <p><b>Collab With:</b><i><u>{juice.collab}</u></i></p>
                      <p><b>Juice Name:</b>{juice.name}</p>
                      <p><b>Flavor:</b> {juice.flavor}</p>
                      <p><b>Price:</b> {juice.price}</p>
                    </li>
                </div>   

            </div>
  
        </div>

        
    )
}

export default Juice

