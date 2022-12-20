import { Route, Routes } from "react-router-dom"
import { ServiceContainer } from "../components/services/ServiceContainer"
import { ServiceForm } from "../components/services/ServiceForm"
import { UpdateService } from "../components/services/ServiceEdit"
import { MyServices } from "../components/services/MyServices"
import { CreatorHome } from "../components/homepages/CreatorHome"
import { ServiceDetails } from "../components/services/ServiceDetails"
import { CreatorDetails } from "../components/creators/CreatorDetails"

export const CreatorViews = () => {
  return <>
     <Routes>
     
        <Route path="/" element={< ServiceContainer  />} />
        <Route path="/services" element={<ServiceContainer />} />
        <Route path="/createservice" element={<ServiceForm />} />
        <Route path="services/:serviceId/edit" element={ <UpdateService /> } />
        <Route path="/myServices" element={<MyServices />} />
        <Route path="/creatorHome" element={< CreatorHome/>} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} /> 
        <Route path="/creators/:creatorId" element={<CreatorDetails />} />


      </Routes>
  </>
}
