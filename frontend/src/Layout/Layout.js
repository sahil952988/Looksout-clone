import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import Router from "../Routers/Router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <div>
          <Router />
          <ToastContainer />
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Layout