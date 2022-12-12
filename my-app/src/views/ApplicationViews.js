import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { ServiceContainer } from "../components/services/ServiceContainer"
import { Authorized } from "./Authorized"
import { CreatorRegister } from "../components/auth/CreatorRegister"
import { ServiceForm } from "../components/services/ServiceForm"

export const ApplicationViews = () => {
  return <>
     <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register  />} />
      <Route path="/registercreator" element={<CreatorRegister />} />
      <Route element={<Authorized />}>
        <Route path="/" element={< ServiceContainer  />} />
        <Route path="/services" element={<ServiceContainer />} />
        <Route path="/createservice" element={<ServiceForm />} />
      

      
      </Route>
      </Routes>
  </>
}


// import { CreatorViews} from "./CreatorView"
// import { CustomerViews } from "./CustomerView"

// export const ApplicationViews = () => {
//  const localMetierUser = localStorage.getItem("metier_user")
//  const metierUserObject = JSON.parse(localMetierUser)

//  if(metierUserObject.staff) {
//   return <CreatorViews/>
//  }

//  else{
//   return <CustomerViews/>
//  }
// }