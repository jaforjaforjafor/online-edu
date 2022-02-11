import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import  logo from "../Images/education pic.jpg";
import "./Header.css";

const Header = () => {
    const{user,logOut}=useAuth()
    return (
        <div className='header'>
             <img src={logo} alt=""width="1050px" height="100px" />
             <nav className="navtool">
            <NavLink to ="/home">Home</NavLink>
            <NavLink to ="/teacher's Profile">Teacher's Profile</NavLink>
            <NavLink to ="/payment">Payment</NavLink>
            { user.email &&<span style={{color: "green"}}>Hello {user.displayName} </span>}
           { 
           user.email ?
           <button onClick={logOut}> log out</button>
           :
            <NavLink to ="/login">Login</NavLink>
           }
            <NavLink to ="/register">Register</NavLink>
            <NavLink to ="/contact">Contact</NavLink>
            <NavLink to ="/feedback">Feedback</NavLink>
            </nav>
        </div>
    );
};

export default Header;