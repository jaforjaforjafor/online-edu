import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import  logo from "../Images/education pic.jpg";
import "./Header.css";

const Header = () => {
    const{user,logOut}=useAuth()
    return (
        <div className='header'>
             <img src={logo} alt=""width="750px" height="150px" />
             
             <nav className="navtool">
             <h2 className='welcome-header'>Welcome To Online Education</h2>
            <NavLink to ="/home">Home</NavLink>
            <NavLink to ="/teacher's Profile">Teacher's Profile</NavLink>
            <NavLink to ="/payment">Payment</NavLink>
            <NavLink to ="/register">Register</NavLink>
            <NavLink to ="/contact">Contact</NavLink>
            <NavLink to ="/feedback">Feedback</NavLink>
            { user.email &&<span style={{color: "green"}}>Hello {user.displayName} </span>}
           { 
           user.email ?
           <button onClick={logOut}> Log Out</button>
           :
            <NavLink to ="/login">Login</NavLink>
           }
            
            </nav>
        </div>
    );
};

export default Header;