import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export const CustomerNavBar = () => {
    const navigate = useNavigate()

    return (
        <div className="navbar">
            <div className="navbar__item">
            <Link className="navbar__link" to="/services">Services</Link>

            </div>
            {
                (localStorage.getItem("metier_user") !== null) ?
                    <div className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("metier_user")
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