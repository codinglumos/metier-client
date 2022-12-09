import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getReactions } from "../../managers/ReactionManager"
import { deleteService, getServices } from "../../managers/ServicesManager"
import { getUsers } from "../../managers/UserManger"
import "./Services.css"

export const AllServices = ({searchServicesState}) => {
/**Need to get all services
 * list all services for customers- everyone
 * creator- can delete and update w/ button that takes them to another module
 * creator- filter using date
 * customers- filter using service.service
 * customers- can favorite, comment, and react to service posted by creators
 */
    const [services, setServices] = useState([])
    const [dateSortedServices, setDateSortedServices] = useState([])
    const [reactions, setReactions] = useState([])
    const [allUsers, setUsers] = useState([])
    const navigate = useNavigate()
    const [filteredServices, setFiltered ] = useState ([])

    useEffect(
        () => {
            getServices()
                .then((servicesArray) => {
                    setServices(servicesArray)
                })
        },
        []
    )

    useEffect(
        () => {
            getReactions()
                .then((reactionsArray) => {
                    setReactions(reactionsArray)
                })
        }, []
    )

    useEffect(
        () => {
            getUsers()
                .then((usersArray) => {
                    setUsers(usersArray)
                })
        }, []
    )
//add this to server- not client!
    // useEffect(
    //     () => {
    //         const sortServices = services.sort((a, b) => (a.publication_date - b.publication_date) ? -1 : 1)
    //         setDateSortedServices(sortServices)
    //     }, [services]
    // )

    useEffect(
        () => {
            const searchedServices = services.filter(service => 
                {return service?.service?.toLowerCase().includes(searchServicesState.toLowerCase())})      
           searchServicesState === "" ? setFiltered(services) :setFiltered(searchedServices)
        },
        [searchServicesState]
    )
    
    const confirmDelete = (evt, dateSortedService) => {
        let text = 'Are you sure you want to delete this service?'
        window.confirm(text)
            ? deleteService(dateSortedService.id).then(() => navigate("/services"))
            : <></>
    }
    const servicesToPrint = searchServicesState != "" ? filteredServices : services
    
    return <article className="services">
        <h2 className="servicesHeader title is-3">All Services</h2>

        {
            servicesToPrint.map(
            (service) => {
                        return <React.Fragment key={`services--${service.id}`}>
                            <div className="columns box" id="services__serviceDetails">
                                <section className="serviceDetails column">
                                    <div className="service">Service: <Link className="servicelink" to={`/services/${service.id}`} >{service.service}</Link></div>
                                    <div className="creator has-text-left" key={`service--${allUsers.id}`}>Creator: {service?.full_name}</div>
                                    <div className="date has-text-left" key={`service--${service.id}`}>Date Created: {service.publication_date}</div>

                                </section>
                                <footer className="">
                                    {
                                        service.is_staff
                                            ? <button className="btn_delete-service button is-danger is-small" onClick={(evt) => { confirmDelete(evt, service) }}>DELETE</button>
                                            : <></>

                                    }
                                </footer>
                            </div>

                        </React.Fragment>
                }

            )
        }
    </article >
}
