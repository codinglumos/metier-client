import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getServiceById } from "../../managers/ServicesManager"


export const ServiceDetails = () => {
    const {serviceId} = useParams()
    const navigate = useNavigate()
    const [service, setService] = useState({})

    useEffect(() => {

        getServiceById(serviceId)
        .then((servicesbyId) => {
            setService(servicesbyId)
        })
            
    }, [serviceId]

    )
 
   
     return service && service.service && 
     <article className="serviceDetails"> {
        <section key={`services--${service.id}`} className="service-container">
                            <div className="service-boxes" id="services">
                                <div className="serviceDetails-column">
                                    <div className="service" key={`service--${service.service}`}>Artwork Title: {service.service}</div>
                                    <img src={service.image} className="creator-image" key={`service--${service.image}`}/>
                                    <div className="creator has-text-left" key={`service--${service.id}`}>Created By: {service.creator.full_name}</div>
                                    <div className="creator has-text-left" key={`service--${service.id}`}>Price: ${service.price}</div>
                                    <div className="creator has-text-left" key={`service--${service.id}`}>Date: {service.publication_date}</div>
                                    <div className="creator has-text-left" key={`service--${service.id}`}>Description: {service.body}</div>
                                    {/* <div className="creator has-text-left" key={`service--${filteredService.id}`}>{filteredService.reactions}</div> */}

                                </div>
                            <button className="btn_edit-service-button" onClick={() => { navigate("/services") }}>All Metier Artwork</button>
                                
                            </div>

                        </section>
           }

    </article >
}
      