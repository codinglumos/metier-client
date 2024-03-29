import { Route, Routes } from "react-router-dom"
import { ServiceContainer } from "../components/services/ServiceContainer"
import { ServiceForm } from "../components/services/ServiceForm"
import { UpdateService } from "../components/services/ServiceEdit"
import { MyServices } from "../components/services/MyServices"
import { ServiceDetails } from "../components/services/ServiceDetails"
import { CreatorDetails } from "../components/creators/CreatorDetails"
import { HomePages } from "../components/homepages/HomePages"
import { CreatorContainer } from "../components/creators/CreatorContainer"

export const CreatorViews = () => {
  return <>
     <Routes>
     
        <Route path="/" element={< ServiceContainer  />} />
        <Route path="/services" element={<ServiceContainer />} />
        <Route path="/createservice" element={<ServiceForm />} />
        <Route path="services/:serviceId/edit" element={ <UpdateService /> } />
        <Route path="/myServices" element={<MyServices />} />
        <Route path="/homepages" element={< HomePages/>} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} /> 
        <Route path="/creators/:creatorId" element={<CreatorDetails />} />
        <Route path="/metiercreators" element={<CreatorContainer />} />


      </Routes>
  </>
}
