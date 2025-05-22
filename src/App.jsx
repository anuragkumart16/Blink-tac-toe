import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash/Splash';

function App() {


  return (
   <Router>
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/profile" element={<h1>About</h1>} />
    </Routes>
   </Router>
  )
}

export default App
