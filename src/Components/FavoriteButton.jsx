import React from 'react';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function FavoriteButton({ juiceID, strainID, updateFavorites }) {

    const [isFavorite, setIsFavorite] = useState(false)
    const [currentFavorites, setCurrentFavorites] = useState([])

    const { currentUser } = useOutletContext()

    useEffect(() => {
        fetch(`/favoritecart`)
            .then(resp => {
                if (resp.ok) {
                    resp.json().then((returnedData) => {
                        console.log("RETURN DATA", returnedData)
                        const userFavorites = returnedData.filter((data) => {
                            if (data.user_id === currentUser.id) {
                                return data
                            }
                        })
                        console.log("AFTER FILTER",userFavorites)
                        setCurrentFavorites(userFavorites)
                    })
                }
            })
            .catch((error) => {
                console.error('Error fetching favorite data.', error)
            })
    }, [currentUser])

    
    console.log("Current Favorite",currentFavorites)

    useEffect(() => {
        console.log(currentFavorites)
        const isInFavorites = currentFavorites.find((data) => {
            if (data.juice_id === juiceID) {
                return data
            }
        });

        console.log(isInFavorites) //Working! Data displays on the Favorite Page
        if (isInFavorites) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }, [currentFavorites, juiceID])

    function addToFavorites(event) {
        const juiceIDClicked = event.target.parentNode.id
        const strainIDClicked = event.target.parentNode.id

        fetch(`/favoritecart`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                juice_id: juiceIDClicked,
                strain_id: strainIDClicked
            })
        })
            .then(res => {
                if (res.ok) {
                    setIsFavorite(true)
                    if(updateFavorites){
                        updateFavorites()
                    }
                }
            })
            .catch(error => {
                console.log(`${error}`)
            });
    }


    console.log(isFavorite)
    console.log(currentFavorites)

    function removeFromFavorites(event) {
        const juiceIDClicked = event.target.parentNode.id
        const favoriteInstance = currentFavorites.find(item => item.id === parseInt(juiceIDClicked))

        fetch(`/favoritecart/${favoriteInstance.id}`, {
            method: "DELETE",
        })
            .then(resp => {
                if (resp.ok) {
                    setIsFavorite(false);
                    if (updateFavorites) {
                        updateFavorites()
                    }
                }
            })
            .catch(error => {
                console.log(`${error}`);
            });
    }

    function onFavoriteButtonClick(event) {
        if (!isFavorite) {
            addToFavorites(event)
        } else {
            removeFromFavorites(event)
        }
    }

    return (
        <button
            className="removeFromCartBttn"
            onClick={onFavoriteButtonClick}
        >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
    )
}
export default FavoriteButton