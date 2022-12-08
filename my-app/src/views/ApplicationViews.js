import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { ServiceContainer } from "../components/services/ServiceContainer"
import { Authorized } from "./Authorized"


export const ApplicationViews = ({ token, setToken }) => {
  return <>
     <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token} />}>

        {/* <Route path="/reactions" element={<ReactionContainer />} /> */}
        <Route path="/" element={< ServiceContainer token={token} />} />
        {/* <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/favorites" element={<CategoryContainer />} /> */}
        <Route path="/services" element={<ServiceContainer />} />
        {/* <Route path="/newServices" element={<AddService />} />
        <Route path="/myServices" element={<MyServices />} />
        <Route path="/newServices" element={<AddService />} /> */}
        {/* <Route path="/users" element={<UserList />} /> */}
        {/* <Route path="/users/:userId" element={<UserDetails />} /> */}
      </Route>
      </Routes>
  </>
}
