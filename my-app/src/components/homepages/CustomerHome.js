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

    return (<>  <section className="customerpage">
   {currentCustomer.length > 0 && <><img src={currentCustomer[0].profile_image}/> Welcome {currentCustomer[0].full_name}!</>}
  
   </section>
     </>
    )
}