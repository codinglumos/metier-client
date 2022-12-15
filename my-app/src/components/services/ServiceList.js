import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getReactions } from "../../managers/ReactionManager"
import { deleteService, getServices, updateService } from "../../managers/ServicesManager"
import { getUsers } from "../../managers/UserManger"
import "./Services.css"

export const AllServices = ({searchServicesState}) => {

    const [services, setServices] = useState([])
    const [reactions, setReactions] = useState([])
    const navigate = useNavigate()
    const [filteredServices, setFiltered ] = useState ([])
    const localMetierUser = localStorage.getItem("metier_user")
    const metierUserObject = JSON.parse(localMetierUser)
    const [checkedReaction, setCheckedReactions] = useState(new Set())
    const [user, setUsers] = useState([])

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
            getUsers()
                .then((usersArray) => {
                    setUsers(usersArray)
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
            const searchedServices = services.filter(service => 
                {return service?.service?.toLowerCase().includes(searchServicesState.toLowerCase())})      
           searchServicesState === "" ? setFiltered(services) :setFiltered(searchedServices)
        },
        [searchServicesState]
    )
    
    const confirmDelete = (evt, service) => {
        let text = 'Are you sure you want to delete this service?'
        window.confirm(text)
            ? deleteService(service.id).then(() => {window.location.reload()})
            : <></>
    }

    const serviceEdit = (service) => {
        let text = 'Are you sure you want to edit this service?'
        window.confirm(text)
            ? navigate(`/services/${service.id}/edit`)
            : <></>
    }

    const servicesToPrint = searchServicesState != "" ? filteredServices : services
    
    return <article className="services">
        <h2 className="servicesHeader title is-3">Metier Services</h2>

        {
            servicesToPrint.map(
            (service) => {
                        return <React.Fragment key={`services--${service.id}`}>
                            <div className="columns-box" id="services">
                                <section className="serviceDetails column">
                                    {/* link to details later? */}
                                    <div className="service" key={`service--${service.service}`}>Service: 
                                    <Link className="servicelink" to={`/services/${service.id}`} >{service.service}</Link>
                                    </div>
                                    <img src={service.image} className="image" key={`service--${service.image}`}/>
                                    <div className="creator has-text-left" key={`service--${service.id}`}>Creator: {metierUserObject.first_name} {service.creator.user}</div>

                                    <div className="reactions">
                                    {
                                        !metierUserObject.staff
                                            ? <fieldset>
                                            <div className="form-group">
                                                <label htmlFor="reaction">Reaction:</label>
                                                {
                                                    reactions.map((reaction) =>{
                                                        return<>
                                                        <option value={`${reaction.id}`} key={`reaction--${reaction.id}`}>{reaction.reaction}</option>
                                                        <input
                                                            type="checkbox"
                                                            className="addReaction"
                                                            value={service.reaction}
                                                            onChange={
                                                                () => {
                                                                    const copy = new Set(checkedReaction)
                                                                    if(copy.has(reaction.id)){
                                                                        copy.delete(reaction.id)
                                                                    } else {
                                                                        copy.add(reaction.id)
                                                                    }
                                                                    setCheckedReactions(copy)
                                                                }
                                                                //needs to be tied to the user id and the reaction id 
                                                                //map over the reactions to check if they have been checked and update services with the new data
                                                            }
                                                            />
                                                        </>
                                                    }
                                                    )
                                                }
                                            </div>
                                        </fieldset>
                                            : <></>

                                    }
                                    </div>
                                </section>
                               
                                <div className="delete_service">
                                    {
                                        metierUserObject.staff && parseInt(metierUserObject.id) === parseInt(service.creator.user)
                                            ? <button className="btn_delete-service button" onClick={(evt) => { confirmDelete(evt, service) }}>Delete</button>
                                            : ""

                                    }
                                </div>

                                <div className="edit_service">
                                    {
                                        metierUserObject.staff && parseInt(metierUserObject.id) === parseInt(service.creator.user)
                                      
                                            ? <button className="btn_edit-service button" onClick={() => { serviceEdit(service) }}>Edit</button>
                                            //window.alert("Service has been updated.")
                                            : <></>

                                    }
                                </div>
                            </div>

                        </React.Fragment>
                }

            )
        }
    </article >
}

