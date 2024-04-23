import React from "react";

function Store({store}){

    const {name, address, borough, zipCode, website, image} = store

    return(
        <div className="store-card">
            <br></br>
            <div className="stores">
                <img src={image} alt={name} width="200px" border="2"/> <br></br>
               
                <div className="description">
                       <p><b>Store Name:</b> <u><i>{name}</i></u></p>
                       <p><b>Store Address:</b> {address}</p>
                       <p><b>Store Borough:</b> {borough}</p>
                       <p><b>Store Zipcode:</b> {zipCode}</p>
                       <p><b>Store Website:</b> {website}</p>
                </div>
            </div>
        </div>
    )
}

export default Store