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
            const searchedServices = services.filter(service => 
                {
                    return service?.service?.toLowerCase().includes(searchServicesState.toLowerCase())
                || service?.creator?.full_name.toLowerCase().includes(searchServicesState.toLowerCase())})      
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
        <h2 className="servicesHeader-title-is-3">Metier Featured Artwork</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {
            servicesToPrint.map(
            (service) => {
                        return <section key={`services--${service.id}`} className="service-container">
                            <div className="service-boxes" id="services">
                                <div className="serviceDetails-column">
                                    <div className="service" key={`service--${service.service}`}>Artwork Title: 
                                    <Link className="servicelink" to={`/services/${service.id}`} > {service.service}</Link>
                                    </div>
                                    <img src={service.image} className="creator-image" key={`service--${service.image}`}/>
                                    <div className="creator has-text-left" key={`service--${service.id}`}>Created By: <Link className="creatorlink" to={`/creators/${service.creator.id}`}>{service.creator.full_name}</Link></div>
                                    <div className="creator has-text-left" key={`service--${service.id}`}>Price: ${service.price}</div>
                                    <div className="creator has-text-left" key={`service--${service.id}`}>Date: {service.publication_date}</div>
                                    {/* <div className="creator has-text-left" key={`service--${service.id}`}>{service.reactions}</div> */}
                                    <div className="reactions">
                                    {
                                        !metierUserObject.staff
                                            ? <fieldset>
                                            <div className="form-group">
                                                <label htmlFor="reaction"></label>
                                                {
                                                    reactions.map((reaction) =>{
                                                        return<>
                                                        <option className="reactions" value={`${reaction.id}`} key={`reaction--${reaction.id}`}>{reaction.reaction}</option>
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
                                                                    service.reactions = [...service.reactions, {
                                                                        reaction: parseInt(reaction.id),
                                                                        customer: parseInt(metierUserObject.id)
                                                                    }]
                                                                    updateService(service)
                                                                }
                                                                //needs to be tied to the user id and the reaction id 
                                                                //map over the reactions to check if they have been checked and update services with the new data
                                                                //make a statment for everyone to see emojis counted for each post
                                                                //onchange- determine if checked- post to create or unchecked- post to delete
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
                                    <div className="edit_service">
                                    {
                                        metierUserObject.staff && parseInt(metierUserObject.id) === parseInt(service.creator.id)
                                      
                                            ? <button className="btn_edit-service-button" onClick={() => { serviceEdit(service) }}>Edit</button>
                                            //window.alert("Service has been updated.")
                                            : <></>

                                    }
                                </div>

                                <div className="delete_service">
                                    {
                                        metierUserObject.staff && parseInt(metierUserObject.id) === parseInt(service.creator.id)
                                            ? <button className="btn_delete-service-button" onClick={(evt) => { confirmDelete(evt, service) }}>Delete</button>
                                            : ""
                                            //window.alert("Service has been deleted.")

                                    }
                                </div>
                                </div>
                             

                                
                            </div>

                        </section>
                }

            )
        }
        </div>
    </article >
}

