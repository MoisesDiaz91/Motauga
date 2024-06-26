import React from "react";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function AddCartButton({ juiceID, updateCart }) {
    const [inCart, setInCart] = useState(false)
    const [currentCart, setCurrentCart] = useState([])

    const { currentUser } = useOutletContext()

    // console.log(juiceID);
    // console.log(currentUser.id)
    useEffect(() => {
        if (currentUser && currentUser.id) {
            // console.log(currentUser)
            // console.log(currentUser.id)
            fetch(`/shoppingcarts`)
                .then(resp => {
                    if (resp.ok) {
                        resp.json().then((returnedData) => {
                            console.log(returnedData) // Array of object (2). Successful fetch of app.db (Shopping Cart Table)
                            const userCart = returnedData.filter((data) => {
                                if (data.user_id === currentUser.id) {
                                    return data
                                }
                            })
                            // console.log(userCart) // Displaying an empty array(During the Morning) || Displaying an array with data from shopping cart(During the Afternoon)
                            setCurrentCart(userCart)
                        })
                    }
                })
                .catch((error) => {
                    console.error('Error fetching shopping cart data.', error)
                })
        }
    }, [currentUser])

    // console.log(currentCart)
    // console.log(juiceID)

    useEffect(() => {
        // Check if the juiceID exists in the currentCart
        const isInCart = currentCart.find((data) => {
            if (data.id === juiceID) {
                return data
            };
        })
        console.log(isInCart) // Undefined at the moment(During the Morning) || Displaying True at the moment (During the Afternoon)
        if (isInCart) {
            setInCart(true);
        } else {
            setInCart(false);
        }

    }, [currentCart, juiceID]);

    // console.log(inCart)
    // console.log(currentUser.id)

    function addToCart(event) {
        console.log(event.target)
        console.log(event.target.parentNode)
        const juiceIDClicked = event.target.parentNode.id
        const strainIDClicked = event.target.parentNode.id
        // console.log("Juice ID", juiceIDClicked) //Not Console logging // Now it is
        
        fetch(`/shoppingcarts`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                juice_id: juiceIDClicked,
                strain_id: strainIDClicked
            })
        })
        .then(res =>{
            if(res.ok){
                setInCart(true);
                if(updateCart){
                    updateCart()
                }
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }

    console.log(currentCart)
    function removeFromCart(event) {
        const juiceIDClicked = event.target.parentNode.id;
        
        console.log(juiceIDClicked)
        console.log(currentCart)
        
        const cartInstance = currentCart.find(item => item.id === parseInt(juiceIDClicked));
        console.log(cartInstance)
        console.log(cartInstance.id)
        // console.log(juiceIDClicked)
        

        fetch(`/shoppingcarts/${cartInstance.id}`, {
            method: "DELETE",
        })
            .then(resp => {
                if (resp.ok) {
                    setInCart(false);
                    if (updateCart) {
                        updateCart()
                    }
                }
            })
            .catch(error => {
                console.log(`${error}`);
            });
    }

    function onAddCartButtonClick(event) {
        if (!inCart) {
            addToCart(event)
        } else {
            removeFromCart(event)
        }
    }

    return (<>

        <button className="addToCartBttn" variant="primary" onClick={onAddCartButtonClick}>{inCart ? 'Remove from Cart' : 'Add to Cart'}</button>
    </>)
}
export default AddCartButton