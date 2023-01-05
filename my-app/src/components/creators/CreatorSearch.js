export const CreatorSearch = ({ setterFunction }) => {   

    return (
        <div className="search">
         <input className="searchterms" type="text" placeholder="Search for Artist"
         onChange={
             (changeEvent) => {
                 setterFunction(changeEvent.target.value)
             }       
         }
          />
         </div> 
     )
 }