import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import BottomNav from './BottomNav/BottomNav'
import './App.css'

const App = () => (
  <div className="app">
    <Navbar />
    <div className="">
      <Home />
    </div>

    <BottomNav />
  </div>
);

export default App;
