// import React, { useState, useEffect } from 'react';
// import AddCartButton from './AddCartButton';
// import FavoriteButton from './FavoriteButton'


// function Juice({ juice }) {

// // console.group(juice)


// const { id, name, collab, flavor, price, image } = juice
//     // const juiceItems = juice.map((data) => {
//     //     const { id, name, collab, flavor, price, image } = data


//         // return (
//         //     <div key={id} className="product">
//         //         <img src={image} alt={name} width="200px" border="2" /> <br></br>
//         //         <div id={id} className="description">
//         //             <p><b>Collab With:</b> <i><u>{collab}</u></i></p>
//         //             <p><b>Juice Name:</b> {name}</p>
//         //             <p><b>Flavor:</b> {flavor}</p>
//         //             <p><b>Price:</b> {price}</p>
//         //         </div>
//         //         <button className="addToCartBttn" variant="primary">Add Item</button>
//         //         <button className="removeFromCartBttn" variant="primary">Delete Item</button>
//         //     </div>

//         // )
//     // })

//     return (<>
//             <div  className="product">
//             <img src={image} alt={name} width="200px" border="2" /> <br></br>
//             <div  id={id} className="description">
//                 <p><b>Collab With:</b> <i><u>{collab}</u></i></p>
//                 <p><b>Juice Name:</b> {name}</p>
//                 <p><b>Flavor:</b> {flavor}</p>
//                 <p><b>Price:</b> {price}</p>
//             </div>
//             <button className="addToCartBttn" variant="primary">Add Item</button>
//             <button className="removeFromCartBttn" variant="primary">Delete Item</button>

//         </div>
//     </>)
// }

// export default Juice

/*

        <div className="product">
            <img src={image} alt={name} width="200px" border="2" /> <br></br>
            <div className="description">
                <p><b>Collab With:</b> <i><u>{collab}</u></i></p>
                <p><b>Juice Name:</b> {name}</p>
                <p><b>Flavor:</b> {flavor}</p>
                <p><b>Price:</b> {price}</p>
            </div>
            <button className="addToCartBttn" variant="primary">Add Item</button>
            <button className="removeFromCartBttn" variant="primary">Delete Item</button>

        </div>

*/


    // const juiceItems = juiceData.map((data) => {
    //     const { id, name, collab, flavor, price, image } = data


    //     return (
    //         <div key={id} className="product">
    //             <img src={image} alt={name} width="200px" border="2" /> <br></br>
    //             <div id={id} className="description">
    //                 <p><b>Collab With:</b> <i><u>{collab}</u></i></p>
    //                 <p><b>Juice Name:</b> {name}</p>
    //                 <p><b>Flavor:</b> {flavor}</p>
    //                 <p><b>Price:</b> {price}</p>
    //             </div>
    //             <button className="addToCartBttn" variant="primary">Add Item</button>
    //             <button className="removeFromCartBttn" variant="primary">Delete Item</button>
    //         </div>

    //     )
    // })