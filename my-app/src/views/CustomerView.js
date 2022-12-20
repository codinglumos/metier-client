import { Route, Routes } from "react-router-dom"
import { ServiceContainer } from "../components/services/ServiceContainer"

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
