import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { CreatorRegister } from "../components/auth/CreatorRegister"

export const ApplicationViews = () => {

  return <>
  <Routes>
  <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register  />} />
      <Route path="/registercreator" element={<CreatorRegister />} />
      <Route path="/*" element={<Authorized />}>
</Route>
  </Routes>
  
  </>
}


