import React from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";


function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { attemptLogin } = useOutletContext() || {};;

    const navigate = useNavigate();

    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    function handleSubmit(e) {
        e.preventDefault();
        attemptLogin({ username, password });
         navigate('/');
       }

    return (<>

        
        <form className="user-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Username..." onChange={handleChangeUsername} value={username}></input>
            <input type="text" placeholder="Password..." onChange={handleChangePassword} value={password}></input>
            <button type="submit" value="Login">Login</button>
        </form>
        <div className="instring-button-container">
            <p>
                If you don't have a Login, please{" "}
                <Link to="/signup" className="instring-button">
                    Signup
                </Link>
            </p>
        </div>
    </>)
}

export default LoginPage

/*

        <div className='navigation-bar'>
            <Link to="/">Home 🏠</Link>
            <Link to="/juicepage">Beverages 🍹</Link>
            <Link to="/strainpage">Strains 🌲</Link>
            <Link to="/storepage">Stores 🏪</Link>
        </div>

*/