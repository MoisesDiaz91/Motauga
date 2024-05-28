import React from "react";
import StrainPage from "./StrainPage";
import JuicePage from "./JuicePage";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function UserFavorites() {

    const [currentJuiceFavorites, setCurrentJuiceFavorites] = useState([])
    const [currentStrainFavorites, setCurrentStrainFavorites] = useState([])

    const { currentUser } = useOutletContext()

    function updateFavorites() {

        if (currentUser && currentUser.id) {

            fetch('/favoritecart')
                .then(res => {
                    if (res.ok) {
                        res.json().then(returnedData => {
                            console.log("Favorite Cart DATA:", returnedData)
                            const userFavorites = returnedData.filter((data) => {
                                console.log(data)
                                if (data.user_id === currentUser.id) {
                                    return data
                                }
                            })
                            console.log("DATA by Current User", userFavorites)
                            setCurrentJuiceFavorites(userFavorites.map((data) => data.juice_obj))
                            setCurrentStrainFavorites(userFavorites.map((data) => data.strain_obj))
                        })
                    }
                })
        }
    }

    useEffect(() => {
        updateFavorites()
    }, [currentUser])

    console.log("Current State Value: Juices",currentJuiceFavorites)
    console.log("Current State Value: Strains",currentStrainFavorites)
    return (<>
        <JuicePage juicesData={currentJuiceFavorites} updateCart={updateFavorites} />,
        <StrainPage strainsData={currentStrainFavorites} updateCart={updateFavorites} />
    </>
    )
}

export default UserFavorites