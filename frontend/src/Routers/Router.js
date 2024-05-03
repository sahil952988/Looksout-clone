import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Contact from "../Pages/Contact"

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </>
  )
}
export default Router