import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from "./components/Header"



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/Header' />} />
        <Route path="Header" element={<Header />} />

      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
