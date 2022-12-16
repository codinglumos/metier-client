import { useNavigate } from "react-router-dom"

export const ServiceSearch = ({ setterFunction }) => {   
    const navigate = useNavigate()

    return (
        <div className="search">
         <input className="searchterms" type="text" placeholder="Search for Artwork"
         onChange={
             (changeEvent) => {
                 setterFunction(changeEvent.target.value)
             }       
         }
          />
         </div> 
     )
 }