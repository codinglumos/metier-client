import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getServices } from "../../managers/ServicesManager"
import { getCreatorUsers } from "../../managers/UserManger"
import "./CreatorDetails.css"

export const CreatorList = ({searchCreatorsState}) => {

    const [creators, setCreators] = useState([])
    const [filteredCreators, setFilteredCreators ] = useState ([])

    useEffect(
        () => {
            getCreatorUsers()
                .then((creatorArray) => {
                    setCreators(creatorArray)
                })
        },
        []
    )

    useEffect(
        () => {
            const searchedCreators = creators.filter(creator => 
                {
                    return creator?.full_name?.toLowerCase().includes(searchCreatorsState.toLowerCase())})

                    searchCreatorsState === "" ? setFilteredCreators(creators) : setFilteredCreators(searchedCreators)
                    
    },
        [searchCreatorsState]
    )
    
    const CreatorsToPrint = searchCreatorsState != "" ? filteredCreators : creators

    return (
        <article className="creators-list">
          <h2 className="creatorsHeader-title-is-3">Metier Featured Artists</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {CreatorsToPrint.map((creator) => {
              return (
                <section key={`creators--${creator.id}`} className="creator-container">
                  <div className="creator-boxes" id="creators">
                    <div className="creators-column">
                      <div>
                        <Link
                          className="creatorlink"
                          to={`/creators/${creator.id}`}>
                          {creator.full_name}
                        </Link>
                      </div>
                      <img
                        src={creator.profile_image}
                        className="creator-image"
                        key={`service--${creator.profile_image}`}
                      />
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </article>
      );
        }           





 
                    

