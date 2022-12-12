import { CreatorViews} from "./CreatorView"
import { CustomerViews } from "./CustomerView"

export const ApplicationViews = () => {
  
 const localMetierUser = localStorage.getItem("metier_user")
 const metierUserObject = JSON.parse(localMetierUser)

 if(metierUserObject.staff) {
  return <CreatorViews/>
 }

 else{
  return <CustomerViews/>
 }
}


