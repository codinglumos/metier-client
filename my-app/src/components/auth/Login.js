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
            <h1 className="metier-title-login">Metier: “Everything you can imagine is real.” </h1> 

            <section className="login-section">
                <form className="form--login" onSubmit={handleLogin}>
              
                    <h2 className="metier-signin-login">Please sign in</h2>

                    <fieldset>
                        <label htmlFor="inputUsername"> Username </label>
                        <input ref={username} type="username" id="username" className="form-control" placeholder="Username address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign: "center"
                    }}>
                        <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
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

             


/*
Both:
?-Login with password and username
?-register as creator or customer
?-read a list of services
-comment- service from list (all)
-delete- comments (they created)
?-react- react to services in the list of all 
AND DETAILS 
?-search by service
-can see the count of different emojis on services posted
-LOGO from Canva!!

Creators:
?-read a list of services 
AND DETAILS (Myservices also for creators)
?-delete- service from list (they created)
-update- service.service with form
-create- service.service- forms in modules
?-create- new service 
?-update- service with form---> need to make it so the original info shows up when editing
?-delete- service.service (they created)

Customers:
-read a list of favorites/bought?? (each customer can)
-favorite services (or buy???)
~-SAVE REACTIONS

MVP:
Data Requirements-->
?You must have an ERD for your project.
?You must have a user-related data scheme. 
?This means that different people can authenticate with your application, 
?and the resources that are created must be 
?assigned to individual users.
?You must have at least one one -> many relationship in your ERD.
?You must have at least one many -> many relationship in your ERD.- reactions!!
?You are required to use the persistent storage tool that you were taught (i.e. SQL Server, SQLite, etc.).

Application Design Requirements

Client-->
?You are required to use React.
?You must have a form that allows a user to create a new resource.
?Your form must include <select> element, radio button group, 
?or checkbox group that allows a user to choose a related resource.
?You must show your proficiency with writing modular code that 
?follows the the Single Responsibility Principle.
?Your application must support multiple client routes to show different 
?views to the user, and the user must be able to navigate to each route/view.
You must be able to implement a flexible layout for your UI by either 
(a) authoring your own CSS using Flexbox, or (b) using a 3rd party framework like Bootstrap.
All copy for your application must be legible, so pay 
attention to colors, margins, padding, and font sizes.

Server-->
?User must be able to delete their own data, and be prevented from deleting other users' data.
?User must be able to edit their own data, and be prevented from editing other users' data.
?You are required to use the major framework that you learned during the course 
?(e.g. ASP.NET, Django, etc...).
?You must implement the authentication scheme you learned during the course 
?(Django tokens, Identity Framework, Firebase Authentication, etc...).
*/ 