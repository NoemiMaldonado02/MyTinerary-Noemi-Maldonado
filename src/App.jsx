import Cities from "./views/Cities.jsx"
import Home from "./views/Home.jsx"
import LayoutMain from "./views/LayoutMain.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cities" element={<Cities />} />
        </Routes>
      </LayoutMain>
    </BrowserRouter>
  )

}

export default App