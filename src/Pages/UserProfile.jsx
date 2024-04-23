import React from "react";
import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import Juice from "../Components/Juice";

function UserProfile() {

    const [profile, setProfile] = useState({});
    const { profileID } = useParams();

    const { currentUser } = useOutletContext()


    console.log(currentUser)

    useEffect(() => {
        if (currentUser) {
            fetch(`/users/${currentUser.id}`)
                .then(res => res.json())
                .then((userData) => {
                    // console.log("Hit This!!", userData)
                    setProfile(userData)
                })
                .catch((error) => {
                    console.error('Error fetching profile', error);
                });
        }
    }, [profileID, currentUser])

    const { first_name, last_name, username, id } = profile

    const juiceComponent = <Juice juiceData={profile}/>

    // console.log(first_name);
    // console.log(last_name);
    // console.log(username);
    return (<>
        <div>
            <ul>
                <h4>Profile ID: {id}</h4>
            </ul>
            <h3>Profile Username: {username}</h3>
            <h4>Profile Name: {first_name} {last_name}</h4>
        </div>

    </>)
}

export default UserProfile
