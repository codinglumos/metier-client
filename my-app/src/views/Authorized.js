import { Navigate, Outlet } from "react-router-dom"

export const Authorized = () => {
  if (localStorage.getItem("metier_user")) {
    return <Outlet />
  }
  return <Navigate to='/login' replace />
}
