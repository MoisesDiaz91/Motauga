import React from "react";
import { useState } from "react";
import { useOutletContext, useNavigate, Link } from "react-router-dom";

function SignUpPage(){
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone_number, setPhone_number] = useState("")

    const navigate = useNavigate();

    const {attemptSignup } = useOutletContext() || {};

    const handleChangeFirstName = (e) => setFirst_Name(e.target.value);
    const handleChangeLastName = (e) => setLast_Name(e.target.value);
    const handleChangeCity = (e) => setCity(e.target.value);
    const handleChangeState = (e) => setState(e.target.value);
    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const hanndleChangePhoneNumber = (e) => setPhone_number(e.target.value)

    function handleFormSubmit(event) {
        event.preventDefault();
        attemptSignup({
          first_name,
          last_name,
          city,
          state,
          username,
          password,
          phone_number
        });
        navigate('/');
      }

    return(
    <>
      <div className="signup-page-container">
       <form id="user-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="first_name"
          value={first_name}
          placeholder="First Name..."
          onChange={handleChangeFirstName}
        />
        <input
          type="text"
          name="last_name"
          value={last_name}
          placeholder="Last Name..."
          onChange={handleChangeLastName}
        />
        <input 
          type="text"
          name="last_name"
          value={phone_number}
          placeholder="Phone Number..."
          onChange={hanndleChangePhoneNumber}
        />
        
        <input
          type="text"
          name="city"
          value={city}
          placeholder="Street Address..."
          onChange={handleChangeCity}
        />
        <input
          type="text"
          name="state"
          value={state}
          placeholder="State..."
          onChange={handleChangeState}
        />
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username..."
          onChange={handleChangeUsername}
        />
        <input
          type="text"
          name="password"
          value={password}
          placeholder="Password..."
          onChange={handleChangePassword}
        />
        <button type="submit">Sign Up</button>
      </form>
      
      <p>
        Already have a login? Login{" "}
        <Link to="/login" className="instring-button">
          here
        </Link>
      </p>
    </div>
    </>)
}

export default SignUpPage