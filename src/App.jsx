import Cities from "./views/Cities.jsx"
import Home from "./views/Home.jsx"
import City from "./views/City.jsx"
import LayoutMain from "./views/LayoutMain.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from './redux/store'
import { Provider } from 'react-redux';


function App() {

  return (
    <BrowserRouter>
    <Provider store={store}>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Cities" element={<Cities/>} />
          <Route path="/Cities/:id" element={<City/>} />
        </Routes>
      </LayoutMain>
      </Provider>
   </BrowserRouter>
)
}

export default App