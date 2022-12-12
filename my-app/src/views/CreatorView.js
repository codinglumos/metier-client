import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { ServiceContainer } from "../components/services/ServiceContainer"
import { Authorized } from "./Authorized"
import { CreatorRegister } from "../components/auth/CreatorRegister"
import { ServiceForm } from "../components/services/ServiceForm"
import { UpdateService } from "../components/services/ServiceEdit"
import { MyServices } from "../components/services/MyServices"

export const CreatorViews = () => {
  return <>
     <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register  />} />
      <Route path="/registercreator" element={<CreatorRegister />} />
      <Route element={<Authorized />}>
        <Route path="/" element={< ServiceContainer  />} />
        <Route path="/services" element={<ServiceContainer />} />
        <Route path="/createservice" element={<ServiceForm />} />
        <Route path="services/:serviceId/edit" element={ <UpdateService /> } />
        <Route path="/myservices" element={<MyServices />} />

      
      </Route>
      </Routes>
  </>
}
