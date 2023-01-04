import { useEffect, useState } from "react"
import "./HomePage.css"
import { getCreatorUsers, getCustomerUsers } from "../../managers/UserManger"

  
export const HomePages = () => {
    const [customers, setCustomer] = useState([])
  const [currentCustomer, setCurrentCustomer] = useState([])
  const localMetierUser = localStorage.getItem("metier_user")
  const metierUserObject = JSON.parse(localMetierUser)
  const [creators, setCreator] = useState([])
  const [currentCreator, setCurrentCreator] = useState([])
   
    
    useEffect(() => {
        getCreatorUsers().then((creatorArray) => setCreator(creatorArray))
      }, [])
    
      useEffect(() => {
        const filteredCreator = creators.filter((creator) => parseInt(metierUserObject.id) === parseInt(creator.user))
        setCurrentCreator(filteredCreator)
      }, [creators])
    
      useEffect(() => {
        getCustomerUsers().then((customerArray) => setCustomer(customerArray))
      }, [])
    
      useEffect(() => {
        const filteredCustomer = customers.filter((customer) => parseInt(metierUserObject.id) === parseInt(customer.user))
        setCurrentCustomer(filteredCustomer)
      }, [customers]
    )

    return (
        !metierUserObject.staff
          ? <>
              <img className="metierlogo" src="https://i.postimg.cc/4dbNvVLr/M-tier-3.gif" />
              <section className="customerpage">
                {currentCustomer.length > 0 && (
                  <>
                    <img className="homepageimg" src={currentCustomer[0].profile_image} />
                    Welcome Back {currentCustomer[0].full_name}!
                  </>
                )}
              </section>
            </>
          : <>
              <img className="metierlogo" src="https://i.postimg.cc/4dbNvVLr/M-tier-3.gif" />
              <section className="creatorpage">
                {currentCreator.length > 0 && (
                  <>
                    <img className="homepageimg" src={currentCreator[0].profile_image} />
                    <div className="welcomepage"> Welcome Back {currentCreator[0].full_name}!</div>
                  </>
                )}
              </section>
            </>
      )
        }