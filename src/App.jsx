import Cities from "./views/Cities.jsx"
import Home from "./views/Home.jsx"
import City from "./views/City.jsx"
import LayoutMain from "./views/LayoutMain.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Cities" element={<Cities/>} />
          <Route path="/Cities/:id" element={<City/>} />
        </Routes>
      </LayoutMain>
   </BrowserRouter>
)
}

export default App