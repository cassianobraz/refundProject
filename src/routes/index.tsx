import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { ManagerRouter } from "./ManagerRouter";
import { EmployeeRoutes } from "./EmployeeRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <ManagerRouter />
    </BrowserRouter>
  )
}