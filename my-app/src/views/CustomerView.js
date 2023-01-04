import { Route, Routes } from "react-router-dom"
import { CreatorDetails } from "../components/creators/CreatorDetails"
import { HomePages } from "../components/homepages/HomePages"
import { ServiceContainer } from "../components/services/ServiceContainer"
import { ServiceDetails } from "../components/services/ServiceDetails"
import { AllServices } from "../components/services/ServiceList"

export const CustomerViews = () => {
  return <>
     <Routes>
     
        <Route path="/services" element={<ServiceContainer />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/" element={< AllServices  />} />
        <Route path="/creators/:creatorId" element={<CreatorDetails />} />
        <Route path="/homepages" element={< HomePages/>} />
        
      </Routes>
  </>
}
