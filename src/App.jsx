import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash/Splash';
import Profile from './pages/Profile/profile';
import Game from './pages/Game/game';
import { GameProvider } from './context/GameContext';

function App() {


  return (
   <Router>
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/game" element={<GameProvider><Game /></GameProvider>} />
    </Routes>
   </Router>
  )
}

export default App
