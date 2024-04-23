import React from 'react';
import JuicePage from './JuicePage';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';


function ShoppingCart() {

    const [currentCart, setCurrentCart] = useState([])
    const { currentUser } = useOutletContext()

    // console.log(currentUser)
    // console.log(currentCart)

    function updateCart() {
        if(currentUser && currentUser.id){

            // console.log(currentUser)
            // console.log(currentUser.id)
            fetch('/shoppingcarts')
            .then(res => {
                if (res.ok) {
                    res.json().then(returnData => {
                        // console.log("HIT THIS", returnData) //This is returning data in shopping cart table in app.db
                        const userCart = returnData.filter((data) => {
                            if (data.user_id === currentUser.id) {
                                return data
                            }
                        })
                        // console.log(userCart) //Previously it was displaying empty array.It now displaying an array of 2 objects 
                        setCurrentCart(userCart.map((data) => data)) // Updating Current Cart with the user id
                    })
                }
            })
        }
    }
    console.log("Hit This",currentCart) // Holding value of user id currently.

    useEffect(() => {
        updateCart()
    }, [currentUser])


    

    return (
        <JuicePage juicesData={currentCart} updateCart={updateCart} />
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