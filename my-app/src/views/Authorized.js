import { Navigate, Outlet } from "react-router-dom"
import { CustomerViews } from "./CustomerView"
import { CreatorViews } from "./CreatorView"

export const Authorized = () => {
  const localStaffUser = localStorage.getItem("is_staff")
  const metierStaff = JSON.parse(localStaffUser)

  const localMetierUser = localStorage.getItem("metier_user")
  const metierUserObject = JSON.parse(localMetierUser)

if (localStorage.getItem("metier_user") && metierStaff) {
  return <><Outlet /> <CreatorViews /></>

} else if (localStorage.getItem("metier_user") && !metierStaff){
  return <><Outlet /> <CustomerViews /></>
}

return <Navigate to='/login' replace />

}
