import { Navigate, Route, Routes } from "react-router-dom"
import { routes } from "./routes"

const AppRouter = () => {
  return (
    <Routes>
      {
        routes.map(route => <Route key={route.path} path={route.path} element={route.element}></Route>)
      }
      <Route path="/" element={<Navigate to={"/products"}></Navigate>}></Route>
    </Routes>
  )
}

export default AppRouter
