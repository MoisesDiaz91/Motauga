import React from "react";

function Store({store}){
    return(
        <div classname="store-card">
            <br></br>
            <div className="stores">
                <img src={store.image} alt={store.name} width="200px" border="2"/> <br></br>
               
                <div className="description">
                    <li > 
                       <p><b>Store Name:</b> <u><i>{store.name}</i></u></p>
                       <p><b>Store Address:</b> {store.address}</p>
                       <p><b>Store Borough:</b> {store.borough}</p>
                       <p><b>Store Zipcode:</b> {store.zipCode}</p>
                       <p><b>Store Website:</b> {store.website}</p>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Store