import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getReactions } from "../../managers/ReactionManager"
import { deleteService, getServices } from "../../managers/ServicesManager"
import { getCreatorUsers } from "../../managers/UserManger"
import "./Services.css"

export const MyServices = () => {

    const [reactions, setReactions] = useState([])
    const navigate = useNavigate()
    const [filteredServices, setFilteredServices ] = useState ([])
    const localMetierUser = localStorage.getItem("metier_user")
    const metierUserObject = JSON.parse(localMetierUser)
    const [creators, setCreator] = useState([])
    const [allServices, setAllServices] = useState([])

    useEffect(
        () => {
            getServices()
                .then((allservicesArray) => {
                    setAllServices(allservicesArray)
                })
        },
        []
    )

    useEffect(() => {
        getCreatorUsers().then(creatorArray => setCreator(creatorArray))
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
            const myServices = allServices.filter(allService => allService?.creator?.id === metierUserObject.id)
            setFilteredServices(myServices)
        },
        [allServices]
    )
      
    const confirmDelete = (service) => {
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
    
    return <article className="services">
        <h2 className="servicesHeader-title-is-3">My Artwork</h2>

        {
            filteredServices.map(
            (filteredService) => {
              
                        return <section key={`services--${filteredService.id}`} className="service-container">
                            <div className="service-boxes" id="services">
                                <div className="serviceDetails-column">
                                    <div className="service" key={`service--${filteredService.service}`}>Artwork Title: {filteredService.service}</div>
                                    <img src={filteredService.image} className="creator-image" key={`service--${filteredService.image}`}/>
                                    <div className="creator has-text-left" key={`service--${filteredService.id}`}>Created By: {filteredService.creator.full_name}</div>
                                    <div className="creator has-text-left" key={`service--${filteredService.id}`}>Price: ${filteredService.price}</div>
                                    <div className="creator has-text-left" key={`service--${filteredService.id}`}>Date: {filteredService.publication_date}</div>
                                    <div className="creator has-text-left" key={`service--${filteredService.id}`}>Description: {filteredService.body}</div>
                                    {/* <div className="creator has-text-left" key={`service--${filteredService.id}`}>{filteredService.reactions}</div> */}

                                    <div className="edit_service">
                                    {
                                        metierUserObject.staff && parseInt(metierUserObject.id) === parseInt(filteredService.creator.id)
                                      
                                            ? <button className="btn_edit-service-button" onClick={() => { serviceEdit(filteredService) }}>Edit</button>
                                            : <></>

                                    }
                                </div>

                                <div className="delete_service">
                                    {
                                        metierUserObject.staff && parseInt(metierUserObject.id) === parseInt(filteredService.creator.id)
                                            ? <button className="btn_delete-service-button" onClick={(evt) => { confirmDelete(evt, filteredService) }}>Delete</button>
                                            : ""

                                    }
                                </div>
                                </div>
                             

                                
                            </div>

                        </section>
                }

            )
        }
    </article >
}