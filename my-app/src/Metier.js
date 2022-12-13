import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { useEffect, useState } from "react"


export const Metier = () => {
  const localMetierUser = localStorage.getItem("metier_user")
  const metierUserObject = JSON.parse(localMetierUser)

  const [validUser, updateValidUser] = useState(false)

  useEffect(() => {
    if(metierUserObject) {
      updateValidUser(metierUserObject.valid) 

    } else {
      updateValidUser(false) 

    }
        
  }, [localMetierUser]
)

  return (
    <>
    {
    validUser 
    ? <NavBar />
    : <></>
    }
    
    <ApplicationViews />
</>
  )
}
   


