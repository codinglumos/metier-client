
export const ServiceSearch = ({ setterFunction }) => {   

    return (
        <div className="search">
         <input className="searchterms" type="text" placeholder="Search for Artwork or Artist"
         onChange={
             (changeEvent) => {
                 setterFunction(changeEvent.target.value)
             }       
         }
          />
         </div> 
     )
 }