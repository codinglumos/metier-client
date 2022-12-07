import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const CreatorNavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/creators">Employees</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/services">Services</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("metier")
                        }
                    }>
                    Logout
                </Link>
            </li>
        </ul>
    )
}