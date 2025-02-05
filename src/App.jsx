import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Components
import Home from "./components/Home";
//Layouts
import LayoutAdmin from "./layouts/LayoutAdmin";




function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/Home' />} />
        <Route path="Home" element={<LayoutAdmin />} >        
          <Route index element={<Home />} />
        </Route>

      </Routes> 
      
    </BrowserRouter>
  )
}

export default App
