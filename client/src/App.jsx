import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Commit from './pages/commit';
import Posts from './pages/posts';

function App() {
async function getdbData() {
  const response = await fetch("http://localhost:8080/");
  const dbData = await response.json();}
return (
<>
<div>
<h1>Dynamic Routing</h1>
  <nav>
  <Link to="/">Home</Link>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Commit" element={<Commit />} />
    <Route path="/Posts" element={<Posts />} />
    <Route path="*" element={<h2>404 page not found</h2>} />
  </Routes>
</div>
</>
)}

export default App
