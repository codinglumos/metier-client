import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { ServiceContainer } from "../components/services/ServiceContainer"
import { Authorized } from "./Authorized"
import { CreatorRegister } from "../components/auth/CreatorRegister"
import { AllServices } from "../components/services/ServiceList"

export const CustomerViews = () => {
  return <>
     <Routes>
     
        <Route path="/services" element={<ServiceContainer />} />
        {/* <Route path="/servicedetails/service" element={<ServiceDetails />} /> */}
        <Route path="/" element={< AllServices  />} />

      
  
      </Routes>
  </>
}
