import {useState, useEffect} from 'react'
import { useOutletContext } from 'react-router-dom';

function AddCartButton({juiceID, updateCart }){
    const [inCart, setInCart] = useState(false)
    const [currentCart, setCurrentCart] = useState([])

    const { currentUser } = useOutletContext()

    useEffect(() => {
        fetch(`/shoppingcarts`)
        .then(resp => {
            if (resp.ok){
                resp.json().then((returnedData) => {
                    const userCart = returnedData.filter((juice) => {
                        if (juice.user_id === currentUser.id) {
                            return juice
                        }
                    })
                    setCurrentCart(...currentCart, userCart)
                })
            }
        })
        .catch((error) => {
            console.error('Error fetching shopping cart data.', error)
        })
    }, [currentUser])

    useEffect(()=>{ 
        // Check if the juiceID exists in the currentCart
        const isInCart = currentCart.find((item) => {
            if (item.juice_id === juiceID) {
                return item
            };
        })
        if (isInCart) {
            setInCart(true);
        } else {
            setInCart(false);
        }
    },[currentUser, juiceID])


    function addToCart(event) {
        const juiceIDClicked = event.target.parentNode.id
        const strainIDClicked = event.target.parentNode.id

        fetch(`/shoppingcarts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                // set to currentUser.id when working
                user_id: currentUser.id,
                juice_id: juiceIDClicked,
                strain_id: strainIDClicked
            })
        })
        .then(resp => {
            if (resp.ok) {
                setInCart(true);
                if (updateCart) {
                    updateCart()
                }
            }
        })
        .catch(error => {
            console.log(`${error}`)
        });
    }


    function removeFromCart(event) {
        const juiceIDClicked = event.target.parentNode.id;
        const strainIDClicked = event.target.parentNode.id
        const cartInstance = currentCart.find(item => item.car_id === parseInt(juiceIDClicked)) || currentCart.find(item => item.car_id === parseInt(strainIDClicked));

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


    function onAddCartButtonClick(event){
        if (!inCart) {
            addToCart(event)
        } else {
            removeFromCart(event)
        }
    }


    return(
        <>
        <button 
        className='shopping-button'
        onClick={onAddCartButtonClick}
        >
            {inCart ? 'Remove from Cart': 'Add to Cart'}
        </button>
        </>)
}

export default AddCartButton