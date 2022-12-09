import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { ServiceContainer } from "../components/services/ServiceContainer"
import { Authorized } from "./Authorized"
import { CreatorRegister } from "../components/auth/CreatorRegister"

export const ApplicationViews = () => {
  return <>
     <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register  />} />
      <Route path="/registercreator" element={<CreatorRegister />} />
      <Route element={<Authorized />}>
        <Route path="/" element={< ServiceContainer  />} />
        <Route path="/services" element={<ServiceContainer />} />
      
      </Route>
      </Routes>
  </>
}
