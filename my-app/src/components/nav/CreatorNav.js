import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const CreatorNavBar = () => {
    const navigate = useNavigate()
    const localMetierUser = localStorage.getItem("metier_user")
    const metierUserObject = JSON.parse(localMetierUser)

    return (
    
        <div className="navbar">
            <div className="navbar__item">
            
            
                <Link className="navbar__link" to="/services">Services</Link>
                <Link className="navbar__link" to="/createservice">Create New Service</Link>           
                <Link className="navbar__link" to="/myservices">My Services</Link> 
              
        
                
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

// import { Link, useNavigate } from "react-router-dom"
// import "./NavBar.css"
// export const MemberNav = () => {
//     const navigate = useNavigate()
//     return (
//         <nav id="main-navbar">
//             <ul id="links">
//                 <div className="dropdown">
//                         <button className="dropbtn">Bourbons
//                         </button>
//                         <div className="dropdown-content">
//                                <ul><Link to="/standardbourbon">Standard Bourbon</Link></ul>
//                                <ul> <Link to="/kentuckybourbon">Kentucky Bourbon</Link></ul>
//                                <ul> <Link to="/straightbourbon">Straight Bourbon</Link></ul>
//                                <ul> <Link to="/smallsinglebourbon">Small Batch & Single Barrel Bourbon</Link></ul>
//                                <ul><Link to="/sourmashbourbon">Sour Mash Bond Bourbon</Link></ul>
//                                <ul><Link to="/bottledbourbon">Bottled in Bond Bourbon</Link></ul>
//                                <ul><Link to="/blendedbourbon">Blended Bourbon</Link></ul>
//                                <ul><Link to="/ryewheatedbourbon">High-Rye & Wheated Bourbon</Link></ul>
//                         </div>
//                     </div>
//                 <Link to="/bourbontypes">Types of Bourbons</Link>
//                     <div className="dropdown">
//                         <button className="dropbtn">Articles
//                         </button>
//                         <div className="dropdown-content">
//                                <ul><Link to="/history">History of Bourbon</Link></ul>
//                                <ul> <Link to="/howitsmade">How Bourbon is Made</Link></ul>
//                                <ul> <Link to="/howtoserve">How to Serve Bourbon</Link></ul>
//                                <ul> <Link to="/booksonbourbon">Books on Bourbon</Link></ul>
//                         </div>
//                     </div>
//                 <div className="dropdown">
//                         <button className="dropbtn">Cocktails
//                         </button>
//                         <div className="dropdown-content">
//                                <ul><Link to="/classiccocktails">Classic Cocktails</Link></ul>
//                                <ul> <Link to="/summercocktails">Summer Cocktails</Link></ul>
//                                <ul> <Link to="/wintercocktails">Winter Cocktails</Link></ul>
//                                <ul> <Link to="/creativetwist">Creative Twists on Classics</Link></ul>
//                         </div>
//                     </div>
//                 <Link to="/distilleries">Distilleries</Link>
//                 <Link to="/mybourbons">My Bourbons</Link>
//                 {
//                     localStorage.getItem("bourbon_user")
//                         ? <li id="links">
//                             <Link className="navbar__link" to="" onClick={() => {
//                                 localStorage.removeItem("bourbon_user")
//                                 navigate("/login", {replace: true})
//                             }}>Logout</Link>
//                         </li>
//                         : ""
//                 }
//                 </ul>
//         </nav>
//     )
// }