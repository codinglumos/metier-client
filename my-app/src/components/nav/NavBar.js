import { CreatorNavBar } from "./CreatorNav"
import { CustomerNavBar } from "./CustomerNav"
import "./NavBar.css"

export const NavBar = () => {

  const localMetierUser = localStorage.getItem("metier_user")
  const metierUserObject = JSON.parse(localMetierUser)
 
  if(metierUserObject.staff) {
   return <CreatorNavBar/>
  }
 
  else{
   return <CustomerNavBar/>
  }
 }


      
   