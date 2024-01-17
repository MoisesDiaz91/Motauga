import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Juice from '../Components/Juice';
import Strain from '../Components/Strain'
import AddCartButton from '../Components/AddCartButton';

function ShoppingCart(){
    const [juiceCart, setJuiceCart] = useState([])
    const [strainCart, setStrainCart] = useState([])

    
    const {currentUser } = useOutletContext()

    function updateJuiceCart(){
        fetch('/shoppingcarts')
        .then (res =>{
            if(res.ok){
                res.json().then(returnedData =>{
                    const userCart =returnedData.filter((juice)=>{
                        if(juice.owner_id === currentUser.id){
                            return juice
                        }
                    })
                    setJuiceCart(userCart.map((juice) => juice.juice_obj))
                })
            }
        })
    }

    function updateStrainCart(){
        fetch('/shoppingcarts')
        .then (res =>{
            if(res.ok){
                res.json().then(returnedData =>{
                    const userCart =returnedData.filter((strain)=>{
                        if(strain.owner_id === currentUser.id){
                            return strain
                        }
                    })
                    setStrainCart(userCart.map((strain) => strain.strain_obj))
                })
            }
        })
    }


    useEffect(()=>{
        updateJuiceCart()
    },[currentUser])

    useEffect(()=>{
        updateStrainCart()
    },[currentUser])

    return(
        <Juice  updateJuiceCart={updateJuiceCart}/>,
        <Strain strainData={strainCart} updateStrainCart={updateStrainCart}/>,
        <AddCartButton juiceData={juiceCart} updateCart={updateJuiceCart} />
    )
}

export default ShoppingCart
