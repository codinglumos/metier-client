import { useEffect, useState } from "react"
import "./HomePage.css"
import { getCustomerUsers } from "../../managers/UserManger"

export const CustomerHome = () => {
    const [customers, setCustomer] = useState([])
    const [currentCustomer, setFiltered] = useState([])
   
    const localMetierUser = localStorage.getItem("metier_user")
    const metierUserObject = JSON.parse(localMetierUser)

    useEffect(() => {
        getCustomerUsers().then(customerArray => setCustomer(customerArray))
    },
        []
    )

    useEffect(() => {
        const filteredCustomer = customers.filter(customer => parseInt(metierUserObject.id) === parseInt(customer.user))
       return setFiltered(filteredCustomer)
    },
        [customers]
    )

    return (<> 
    <img className="metierlogo" src="https://i.postimg.cc/4dbNvVLr/M-tier-3.gif"></img>
     <section className="customerpage">
   {currentCustomer.length > 0 && <><img className="homepageimg" src={currentCustomer[0].profile_image}/> Welcome Back {currentCustomer[0].full_name}!</>}
   </section>

     </>
    )
}