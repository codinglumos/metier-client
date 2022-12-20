import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getMetierCreatorById } from "../../managers/UserManger"


export const CreatorDetails = () => {
    const {creatorId} = useParams()
    const navigate = useNavigate()
    const [creator, setCreator] = useState({})

    useEffect(() => {

        getMetierCreatorById(creatorId)
        .then((creatorsbyId) => {
            setCreator(creatorsbyId)
        })
            
    }, [creatorId]

    )
 
   
     return creator && creator.full_name && 
     <article className="creatorDetails"> {
        <section key={`creators--${creator.id}`} className="creator-container">
                            <div className="creator-boxes" id="creators">
                                <div className="creatorDetails-column">
                                    <div className="creator" key={`creator--${creator.full_name}`}>Artwork Title: {creator.full_name}</div>
                                    <img src={creator.profile_image} className="creator-image" key={`service--${creator.profile_image}`}/>
                                    <div className="creator has-text-left" key={`creator--${creator.id}`}>Created By: {creator.bio}</div>
                                    <div className="creator has-text-left" key={`creator--${creator.id}`}>Username: {creator.username}</div>
                                    {/* <div className="creator has-text-left" key={`service--${filteredService.id}`}>{filteredService.reactions}</div> */}

                                </div>
                            <button className="btn_edit-service-button" onClick={() => { navigate("/services") }}>All Metier Artwork</button>
                                
                            </div>

                        </section>
           }

    </article >
}
      