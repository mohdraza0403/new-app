import React from 'react'
import Navbar from './components/Navbar'
import Page from './components/Home'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page/> } />
      </Routes>
    </div>
  )
}

export default App;

