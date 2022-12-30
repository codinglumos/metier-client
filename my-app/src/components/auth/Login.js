import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"
import "./Login.css"

export const Login = () => {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            username: username.current.value,
            password: password.current.value
        }
        loginUser(user)
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("metier_user", JSON.stringify(res))
                    localStorage.setItem("is_staff", JSON.stringify(res.staff))

                    //nav to home when it is made!!
                    navigate("/services")
                }
                
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Username or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <h1 className="metier-title-login">“Every artist was first an amateur.”  ―Ralph Waldo Emerson</h1> 

            <section className="login-section">
                <form className="form--login" onSubmit={handleLogin}>
              
                    <h2 className="metier-signin-login">Metier: A Virtual Gallary for All</h2>

                    <fieldset>
                        <label htmlFor="inputUsername" className="label--login"> Username </label>
                        <input ref={username} type="username" id="username" className="form-control" placeholder="Username address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword" className="label--login"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign: "center"
                    }}>
                        <button className="btn-login" type="submit">Sign In</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Register as a New Metier Member</Link>
            </section>
            <section className="link--register">
                    <Link to="/registercreator">Register New Metier Creator</Link>
                </section>
        </main>
    )
}