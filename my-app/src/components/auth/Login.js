import React, { useRef, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, setEmail] = useState("painting@pisces.com")
    const [password, setPassword] = useState("painting")
    const existDialog = useRef()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8000/login`, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(authInfo => {
                if (authInfo.valid) {
                    localStorage.setItem("honeyrae", JSON.stringify(authInfo))
                    navigate("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Meiter: What's Your Side Hustle?</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email" id="inputEmail"
                            value={email}
                            onChange={evt => setEmail(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input type="password" id="inputPassword"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            className="form-control"
                            placeholder="Password"
                            required />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <div className="loginLinks">
                <section className="link--register">
                    <Link to="/register">Not a member yet?</Link>
                </section>
                <section className="link--register">
                    <Link to="/registercreator">Register New Creator</Link>
                </section>
            </div>
        </main>
    )
}

