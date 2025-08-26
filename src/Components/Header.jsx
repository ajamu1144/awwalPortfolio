import React from "react";
// import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="logo">Sakariyau</div>
            <nav className="nav">
                <Link to='/'>Home</Link>
                {/*<Link to='/About'>About</Link>*/}
                <Link to='/todo'>To Do List</Link>
                <Link to='/contacts'>Contacts</Link>
                <Link to='/shop'>Shop</Link>
                {/*<Link to='/todo'>To Do List</Link>*/}
                {/*<a href="#">Projects</a>*/}
                {/*<a href="#">Contact</a>*/}
            </nav>
        </header>
    );
}

export default Header;
