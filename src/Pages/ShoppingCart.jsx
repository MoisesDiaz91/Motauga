import React from 'react';
import JuicePage from './JuicePage';
import StrainPage from './StrainPage';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';


function ShoppingCart() {

    const [currentCart, setCurrentCart] = useState([])
    const [strainCurrentCart, setStrainCurrentCart] = useState([])

    const { currentUser } = useOutletContext()

    // console.log(currentUser)
    // console.log(currentCart)

    function updateCart() {
        if (currentUser && currentUser.id) {

            // console.log(currentUser)
            // console.log(currentUser.id)
            fetch('/shoppingcarts')
                .then(res => {
                    if (res.ok) {
                        res.json().then(returnData => {
                            console.log("Shopping Cart DATA:", returnData) //This is returning data in shopping cart table in app.db
                            const userCart = returnData.filter((data) => {
                                if (data.user_id === currentUser.id) {
                                    return data
                                }
                            })
                            console.log("DATA by Current User", userCart) //Previously it was displaying empty array.It now displaying an array of 2 objects 
                            setCurrentCart(userCart.map((data) => data.juice_obj)) // Updating Current Cart with the user id
                            setStrainCurrentCart(userCart.map((data)=> data.strain_obj))
                        })
                    }
                })
        }
    }
    console.log("Current State Value", currentCart) // Holding value of user id currently.

    useEffect(() => {
        updateCart()
    }, [currentUser])


    console.log(currentCart)
    console.log(strainCurrentCart)

    return (<>
        <JuicePage juicesData={currentCart} updateCart={updateCart} />,
        <StrainPage strainsData={strainCurrentCart} updateCart={updateCart} />
    </>
    )
}

export default ShoppingCart

// const {currentUser } = useOutletContext()

// function updateJuiceCart() {
//     fetch('/shoppingcarts')
//         .then(res => {
//             if (res.ok) {
//                 res.json().then(returnedData => {
//                     const userCart = returnedData.filter((juice) => {
//                         if (juice.owner_id === 1) {
//                             return juice
//                         }
//                     })
//                     setJuiceCart(userCart.map((juice) => juice.juice_obj))
//                 })
//             }
//         })
// }

// useEffect(() => {
//     updateJuiceCart()
// }, [])

// const juiceItems = juiceCart.map((juice) => {
//     console.log("Stern", juice)
//     return <Juice juice={juice} updateCart={updateJuiceCart} isShoppingCart={true} />
// })