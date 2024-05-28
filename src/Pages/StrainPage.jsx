
import React from "react";
import AddCartButton from "../Components/AddCartButton";
import FavoriteButton from "../Components/FavoriteButton";
import { useOutletContext } from "react-router-dom";

function StrainPage({ strainsData, updateCart}) {

console.log(strainsData)

const {currentUser} = useOutletContext()

    const strainItems = strainsData.map(strain => {
       
        console.log(strainsData)

        const {id, image, name, type, aroma, taste, thc_level } = strain

        console.log(id, image, name, type, aroma, taste, thc_level )
        return (
            <div key={id} id={id}className="product">
                <img src={image} alt={name} width="250px" border="2" />
                <div className="description">
                    <p><b>Strain Name:</b> {name}</p>
                    <p><b>Strain Type:</b> {type}</p>
                    <p><b>Strain Aroma:</b> {aroma}</p>
                    <p><b>Strain Taste:</b> {taste}</p>
                    <p><b>Strain THC Level:</b> {thc_level}</p>
                </div>
                {currentUser ? <AddCartButton strainID={id} updateCart={updateCart}/> : null}
                <button className="removeFromCartBttn" variant="primary">Delete Item</button>
            </div>
        )
    })

    return (
        <div className='strain-page'>
            <div className="shopTitle">
                <h1>The Collection</h1>
            </div>

            <div className="products">
                {strainItems}
            </div>

        </div>
    )
}

export default StrainPage