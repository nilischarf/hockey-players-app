import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
       <nav>
        <Link to="/">HOME</Link>
        <Link to="/players">PLAYERS</Link>
        <Link to="/about">ABOUT</Link>
    </nav>
    )
}

export default Navbar