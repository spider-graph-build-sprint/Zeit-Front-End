import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/sign-up">Sign up</Link>
        </div>
    )
}

export default NavBar;