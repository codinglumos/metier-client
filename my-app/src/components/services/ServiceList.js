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
                                    <div className="creator has-text-left" key={`service--${allUsers.id}`}>Creator: {service.creator.full_name}</div>
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

// import React, { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom"
// import { getBourbons, deleteBourbon } from "../../managers/BourbonManager.js"
// export const BourbonList = (props) => {
//     const [bourbons, setBourbons] = useState([])
//     const navigate = useNavigate()
//     const localBourbonUser = localStorage.getItem("bourbon_user")
//     const bourbonUserObject = JSON.parse(localBourbonUser)
//     // useEffect(
//     //     () => {
//     //         const searchedBourbons = bourbons.filter(distillery => {
//     //             return distillery.name.toLowerCase().includes(searchTermState.toLowerCase())
//     //                 || distillery.location.toLowerCase().includes(searchTermState.toLowerCase())
//     //         })
//     //         setBourbons(searchedBourbons)
//     //     },
//     //     [searchTermState]
//     // )
//     useEffect(() => {
//         getBourbons().then(data => setBourbons(data))
//     }, []
//     )
//     return (<>
//         <h2>Bourbons</h2>
//         <div>
//             {
//                 bourbonUserObject.staff
//                     ? <button className="add_bourbon" onClick={() => {
//                         navigate({ pathname: "/bourbons/add" })
//                     }}>Add A Bourbon</button>
//                     : ""
//             }
//         </div>
//         <article className="bourbons">
//             {
//                 bourbons.map(bourbon => {
//                     return <section key={`bourbon--${bourbon.id}`} className="bourbon">
//                         <div className="bourbon_name"><u><b>{bourbon.name}</b></u></div>
//                         <div className="bourbon_type"><b>Type of Bourbon:</b>{bourbon?.type_of_bourbon?.type}</div>
//                         <div className="bourbon_proof"><b>Proof:</b>{bourbon.proof}</div>
//                         <div className="bourbon_aroma"><b>Aroma:</b>{bourbon.aroma}</div>
//                         <div className="bourbon_taste"><b>Taste:</b>{bourbon.taste}</div>
//                         <div className="bourbon_finish"><b>Finish:</b>{bourbon.finish}</div>
//                         <div className="bourbon_description"><b>Description:</b>{bourbon.description}</div>
//                         <div className="bourbon_madeIn"><b>Made In:</b>{bourbon.made_in}</div>
//                         <Link to ={bourbon.link_to_buy}>Buy Bourbon</Link>
//                         <div className="bourbon_bourbonImg">
//                             <img src={bourbon.bourbon_img} height="205" width="175"/></div>
//                         <div>
//                             {
//                                 bourbonUserObject.staff
//                                     ? <button className="update_bourbon" onClick={() => {
//                                         navigate({ pathname: `/bourbons/${bourbon.id}/update` })
//                                     }}>Update Bourbon</button>
//                                     : ""
//                             }
//                         </div>
//                         <div>
//                             {
//                                 bourbonUserObject.staff
//                                     ? <button className="delete_bourbon" onClick={() => {
//                                         const bourbonDelete = {
//                                             id: bourbon.id
//                                         }
//                                         deleteBourbon(bourbonDelete)
//                                             .then(() => { window.location.reload() })
//                                     }}
//                                     >Delete Bourbon</button>
//                                     : ""
//                             }</div>
//                     </section>
//                 })
//             }
//         </article>
//     </>
//     )
// }