import React from "react";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const POST_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

const URL = "/api"

function Home({updateSearchText}) {

  const [currentUser, setCurrentUser] = useState(null)

  const navigate = useNavigate()

  // console.log(currentUser)


  //SIGN UP//
  async function attemptSignup(userInfo) {
    const res = await fetch(URL + '/users', {
      method: 'POST',
      headers: POST_HEADERS,
      body: JSON.stringify(userInfo)
    });
    if (res.ok) {
      const data = await res.json();
      setCurrentUser(data);
    } else {
      alert('Invalid sign up');
    }
  }

  //LOGIN//
  async function attemptLogin(userInfo) {
    const res = await fetch(URL + '/login', {
      method: 'POST',
      headers: POST_HEADERS,
      body: JSON.stringify(userInfo)
    })
    if (res.ok) {
      const data = await res.json()
      setCurrentUser(data)
    } else {
      alert('Invalid login')
    }
  }

    useEffect(() => {
    fetch(URL + '/check_session')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(userData => {
          setCurrentUser(userData)
        })
      }
    })
  }, [])

  //LOGOUT//

  function logout() {
    setCurrentUser(null)
    fetch(URL + '/logout', { method: "DELETE" })
    navigate('/')
  }



  // Now you can call the function with appropriate arguments, for example:


  return (<>
    <div className="home-container">
      <NavBar currentUser={currentUser} logout={logout} updateSearchText={updateSearchText}/>
      <Outlet context={{ attemptLogin, attemptSignup, logout, currentUser }} />
    </div>
  </>);
}

export default Home