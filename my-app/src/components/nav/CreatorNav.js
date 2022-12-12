import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const CreatorNavBar = () => {
    const navigate = useNavigate()

    return (
        <div className="navbar">
            <div className="navbar__item">
                <Link className="navbar__link" to="/services">Services</Link>
                <Link className="navbar__link" to="/createservice">Create New Service</Link>           
                <Link className="navbar__link" to="/myservices">My Services</Link> 
            </div>
            {
                (localStorage.getItem("metier_token") !== null) ?
                    <div className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("metier_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </div> :
                    <>
                        <div className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </div>
                    </>
            }        </div>
    )
}