import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from "./pages/Home";
function App() {
return (
<>
<div>
<h1>Dynamic Routing</h1>
  <nav>
  <Link to="/">Home</Link>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<h2>404 page not found</h2>} />
  </Routes>
</div>
</>
)}

export default App
