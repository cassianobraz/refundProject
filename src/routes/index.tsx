import { BrowserRouter } from "react-router";

import { Loading } from "../components/Loading";
import { AuthRoutes } from "./AuthRoutes";
import { ManagerRouter } from "./ManagerRouter";
import { EmployeeRoutes } from "./EmployeeRoutes";

const isLoading = false;

//const session = undefined

const session = {
  user: {
    role: "",
  },
}

export function Routes() {
  function Route() {
    switch (session?.user.role) {
      case "employee":
        return <EmployeeRoutes />
      case "manager":
        return <ManagerRouter />
      default:
        return <AuthRoutes />
    }
  }

  if (isLoading) {
    return <Loading />
  }
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  )
}