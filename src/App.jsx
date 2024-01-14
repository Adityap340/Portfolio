import React, { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './cursorLightEffect.css';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="app-container flex relative">
      {/* Cursor Light Effect */}
      <div className="cursor-light" style={{ left: cursorPosition.x, top: cursorPosition.y }} />

      {/* Rest of your App content */}
      <Navbar />
      <div className="min-h-screen flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default App;