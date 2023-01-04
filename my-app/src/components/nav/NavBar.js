import React from "react"
import { Link, useNavigate } from "react-router-dom"
// import Logo from canva when ready!
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    const localMetierUser = localStorage.getItem("metier_user")
    const metierUserObject = JSON.parse(localMetierUser)
    
    return (
        <nav className="navbar-container" role="navigation" aria-label="main navigation">
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
            <div className="navbar-end-nav-links">
                <div className="navbar-menu">
                   
                      <div>
                                <div className="navbar">
                                { (localStorage.getItem("metier_user") !== null && metierUserObject.staff) ?
                                   <><div className="navbar-item">
                                   <div className="navbar__item">
                                       <Link className="navbar__item" to="/homepages"> Metier Homepage</Link>
                                   </div>
                                  </div> 
                                  <div className="navbar-item">
                                        <div className="navbar__item">
                                            <Link className="navbar__item" to="/services"> All Metier Artwork</Link>
                                        </div>
                                    </div>

                                   <div className="navbar-item">
                                        <div className="navbar__item">
                                            <Link className="navbar__item" to="/createservice">Add Metier Artwork</Link>
                                        </div>
                                    </div>

                                    <div className="navbar-item">
                                        <div className="navbar__item">
                                            <Link className="navbar__item" to="/myServices">My Artwork</Link>
                                        </div>
                                        
                                    </div>
                                    
                                    </>
                                    : <></>}

                                { (localStorage.getItem("metier_user") !== null && !metierUserObject.staff) ?
                                   <> 
                                   <div className="navbar-item">
                                   <div className="navbar__item">
                                       <Link className="navbar__item" to="/homepages"> Metier Member Homepage</Link>
                                   </div>
                                  </div> 

                                    <div className="navbar-item">
                                        <div className="navbar__item">
                                            <Link className="navbar__item" to="/services"> Metier Artwork</Link>
                                        </div>
                                    </div>
                                        
                                    </>
                                    : <></>}
                                    
                                    {
                        (localStorage.getItem("metier_user") !== null) ?
                            <div>
                                <button className="navbar-logout"
                                    onClick={() => {
                                        localStorage.removeItem("metier_user");
                                        localStorage.removeItem("is_staff")
                                        navigate('/login')
                                    }}
                                >Logout</button>
                            </div> : <></>     
                    } 

                                </div>
                            </div>
                           
                 
                </div>
            </div>
        </nav >
    )
}