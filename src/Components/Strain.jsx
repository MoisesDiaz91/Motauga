import React from "react";

function Strain ({strain}){

    return(
        <div className="strain-card">
            <br></br>
            <div className="product">
                <img src={strain.image} alt={strain.name} width="250px" border="2"/>
                 <button className="favorite-button" variant="primary" >❤️️</button> 
                 <button className="add-button" variant="primary">Add Item</button>
                 <button className="delete-button" variant="primary">Delete Item</button>
     
                 <div className="description">
                    <li >
                        <p><b>Strain Name:</b> {strain.name}</p>
                        <p><b>Strain Type:</b> {strain.type}</p>
                        <p><b>Strain Aroma:</b> {strain.aroma}</p>
                        <p><b>Strain Taste:</b> {strain.taste}</p>
                        <p><b>Strain THC Level:</b> {strain.thc_level}</p>
                    </li>
                </div>

            </div> 
                    
        </div>
    )
}

export default Strain