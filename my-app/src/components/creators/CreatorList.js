import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getReactions } from "../../managers/ReactionManager"
import { addReaction, deleteService, getServices, updateService } from "../../managers/ServicesManager"
import "./CreatorDetails.css"

export const AllCreators = ({searchServicesState}) => {

    const [creators, setCreators] = useState([])
    const navigate = useNavigate()
   
    useEffect(
        () => {
            getCreators()
                .then((creatorArray) => {
                    setCreators(creatorArray)
                })
        },
        []
    )

    
    return <article className="creators">
        <h2 className="servicesHeader-title-is-3">Metier Featured Artists</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {
            creators.map(
            (creator) => {
             return <section key={`creators--${creator.id}`} className="creator-container">
                 <div className="creator-boxes" id="creators">
                <div className="creators-column">
                <div><Link className="creatorlink" to={`/creators/${service.creator.id}`}>{service.creator.full_name}</Link></div>
                 <img src={creator.profile_image} className="creator-image" key={`service--${creator.profile_image}`}/>
                </div>
                
            </div>
            </section>            
        
            )}

    </article >

 }
                    

