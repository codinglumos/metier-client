import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"
import "./Login.css"

export const CreatorRegister = () => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const profile_image = useRef()
    const bio = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": username.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "email": email.current.value,
                "profile_image": profile_image.current.value,
                "bio": bio.current.value,
                "password": password.current.value,
                "account_type": "staff"
            }

            registerUser(newUser)
                .then(res => {
                    if ("valid" in res && res.valid && "token" in res) {
                        localStorage.setItem("metier_user", JSON.stringify(res))
                        localStorage.setItem("is_staff", JSON.stringify(res.staff))
                        
                    }
                    navigate("/homepages")
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputUsername">Username</label>
                    <input ref={username} type="text" name="username" className="form-control" placeholder="Username" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail">Email</label>
                    <input ref={email} type="text" name="email" className="form-control" placeholder="Email" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Profile Image </label>
                    <textarea ref={profile_image} name="profile_image" className="form-control" placeholder="Upload your image here" />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Bio </label>
                    <textarea ref={bio} name="bio" className="form-control" placeholder="Tell the Metier Community about yourself..." />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn-login" type="submit">Register</button>
                </fieldset>
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}
