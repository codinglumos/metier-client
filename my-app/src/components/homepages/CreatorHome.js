import { useEffect, useState } from "react"
import "./HomePage.css"
import { getCreatorUsers } from "../../managers/UserManger"

export const CreatorHome = () => {
    const [creators, setCreator] = useState([])
    const [currentCreator, setFiltered] = useState([])
   
    const localMetierUser = localStorage.getItem("metier_user")
    const metierUserObject = JSON.parse(localMetierUser)

    useEffect(() => {
        getCreatorUsers().then(creatorArray => setCreator(creatorArray))
    },
        []
    )

    useEffect(() => {
        const filteredCreator = creators.filter(creator => parseInt(metierUserObject.id) === parseInt(creator.user))
       return setFiltered(filteredCreator)
    },
        [creators]
    )

    return (
        <>
    <img className="metierlogo" src="https://i.postimg.cc/4dbNvVLr/M-tier-3.gif" />

          <section className="creatorpage">
            {currentCreator.length > 0 && (
              <>
                <img className="homepageimg" src={currentCreator[0].profile_image} />
               <div className="welcomepage"> Welcome Back {currentCreator[0].full_name}!</div>

              </>                     
            )}
          </section>
        </>

      );
}