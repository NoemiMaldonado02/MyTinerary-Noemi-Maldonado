import Cities from "./views/Cities.jsx"
import Home from "./views/Home.jsx"
import City from "./views/City.jsx"
import LayoutMain from "./views/LayoutMain.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./views/SignUp"
import Login from "./views/Login"
import { useEffect } from "react"
import authQueries from "./services/authQueries"
import { useDispatch } from "react-redux"
import { login } from "./redux/actions/userActions"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import alerts from "./utils/alerts"
import WithUser from "./guard/withUser"

function App() {
  const dispatch = useDispatch()

  useEffect( () => {
    authQueries.loginWithToken().then((res) => {
      if (res.status == 200){
        dispatch(login(res.data))
        alerts.success("Welcome " + res.data.first_name)
      }else{

      }
    })
  }, [])



  return (
    <BrowserRouter>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cities" element={<Cities />} />
          <Route path="/Cities/:id" element={<City />} />
          <Route element={<WithUser/>}>
          <Route path="/SignUp" element={ <SignUp /> } />
          <Route path="/Login" element={ <Login /> } />
          </Route>
        </Routes>
      </LayoutMain>
      <ToastContainer />
    </BrowserRouter>
  )
}
export default App