import { Link, useNavigate } from "react-router-dom"
// import Logo from canva when ready!
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    const localMetierUser = localStorage.getItem("metier_user")
    const metierUserObject = JSON.parse(localMetierUser)
    
    return (
        <nav className="navbar has-shadow is-warning mb-5" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    {/* <img src={Logo} height="3rem" alt="React Logo" /> <h1 className="title is-4 ml-3">Level UP</h1> */}
                </a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" id="burger">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-end nav-links">
                <div className="navbar-menu">
                    {
                        (localStorage.getItem("metier_user") !== null && metierUserObject.staff) ?
                            <div>
                                <ul className="navbar-item">
                                    <div className="navbar-item">
                                        <li className="navbar__item">
                                            <Link to="/createservice">Create New Service</Link>
                                        </li>
                                    </div>
                                    <div className="navbar-item">
                                        <li className="navbar__item">
                                            <Link to="/myServices">My Services</Link>
                                        </li>
                                    </div>
                                    <div className="navbar-item">
                                        <li className="navbar__item">
                                            <Link to="/services">Services</Link>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            : <></>
                    }
                    {
                        (localStorage.getItem("metier_user") !== null) ?
                            <li className="navbar-item">
                                <button className="nav-link fakeLink is-link"
                                    onClick={() => {
                                        localStorage.removeItem("metier_user");
                                        localStorage.removeItem("is_staff")
                                        navigate('/login')
                                    }}
                                >Logout</button>
                            </li> :
                            <>
                                <div>
                                    <div className="navbar-item">
                                        <div className="navbar-item">
                                            <li className="nav-item">
                                                <Link className="nav-link is-link" to="/login">Login</Link>
                                            </li>
                                        </div>
                                        <div className="navbar-item">
                                            <li className="nav-item">
                                                <Link className="nav-link is-link" to="/register">Register</Link>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </div>
        </nav >
    )
}