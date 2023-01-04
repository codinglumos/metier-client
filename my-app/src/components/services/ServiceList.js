import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getReactions } from "../../managers/ReactionManager"
import { addReaction, deleteService, getServices, updateService } from "../../managers/ServicesManager"
import "./Services.css"

export const AllServices = ({searchServicesState}) => {

    const [services, setServices] = useState([])
    const [reactions, setReactions] = useState([])
    const navigate = useNavigate()
    const [filteredServices, setFiltered ] = useState ([])
    const localMetierUser = localStorage.getItem("metier_user")
    const metierUserObject = JSON.parse(localMetierUser)
    const [checkedReaction, setCheckedReactions] = useState({})

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
                                    <div className="creator has-text-left">Created By: <Link className="creatorlink" to={`/creators/${service.creator.id}`}>{service.creator.full_name}</Link></div>
                                    <div className="creator has-text-left">Price: ${service.price}</div>
                                    <div className="creator has-text-left">Date: {service.publication_date}</div>
                                    {/* <div className="creator has-text-left" key={`service--${service.id}`}>{service.reactions}</div> */}
            <div className="reactions">
                {
                    !metierUserObject.staff
                        ? 
                        <div className="reaction-container">
                            <label htmlFor="reaction"></label>
                            {
                                reactions.map((reaction) =>{
                        return<>
                        <input
                            type="checkbox"
                            className="addReaction"
                            value={service.reaction}
                            onChange={
                                () => {
                                    const copy = {...checkedReaction}
                                    console.log(copy)
                                    if(service.id in copy){
                                        if(copy[service.id].has(reaction.id)){
                                            
                                            copy[service.id].delete(reaction.id)
                                            console.log(service.id)
                                        } else {
                                            copy[service.id].add(reaction.id)
                                            //addReaction(service.id, reaction.id)
                                        }
                                    }
                                    else{
                                        copy[service.id] = new Set([reaction.id])
                                        //addReaction(service.id, reaction.id)

                                    }
                                    setCheckedReactions(copy)

                                    /*
                                        {
                                        2: Set(4),
                                        6: Set(1, 4)
                                        }

                                        http://localhost:8000/services/10?reaction=2
                                        fetch- I will get services by id first 
                                        and then services?reaction reactions add id

                                        export const addReaction = (serviceId, reactionId) => {
                                        return fetch(`http://localhost:8000/services/${serviceId}?reaction=${reactionId}`, {
                                            method: "POST",
                                            headers: {
                                                "Accept": "application/json",
                                                "Content-Type": "application/json",
                                                "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`
                                            },
                                            body: JSON.stringify(serviceId, reactionId)
})
}
                                        
                                        
                                        */

                                    // service.reactions = [...service.reactions, {
                                    //     reaction: parseInt(reaction.id),
                                    //     customer: parseInt(metierUserObject.id)
                                    // }]
                                    // updateService(service)
                                }
                            }
                            />
                        <option className="reactions" value={`${reaction.id}`} key={`reaction--${reaction.id}`}>{reaction.reaction}</option>

                        </>
                    }
                    )
                }
                        </div>
                  
                        : <></>

                    }
                    </div>
                    <div className="edit_service">
                    {
                        metierUserObject.staff && metierUserObject.username === service?.creator?.user?.username
                        
                            ? <button className="btn_edit-service-button" onClick={() => { serviceEdit(service) }}>Edit</button>
                            : <></>

                    }
                </div>

                    <div className="delete_service">
                        {
                            metierUserObject.staff && metierUserObject.username === service?.creator?.user?.username
                                ? <button className="btn_delete-service-button" onClick={(evt) => { confirmDelete(evt, service) }}>Delete</button>
                                : ""

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

