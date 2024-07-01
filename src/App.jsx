// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Bedroom from './components/Bedroom';
import Bathroom from './components/Bathroom';
import Kitchen from './components/Kitchen';
import Livingroom from './components/Livingroom';



function App() {

  return (
    <>
      <Router>
        <header>
          <h1>Selhano</h1>
          <nav>
            <ul>

              <li>
                <NavLink
                  to='/'
                  // className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/project'
                  // className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Project
                  
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/about'
                  // className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  About
                </NavLink>
              </li>

            </ul>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route  path='/project/*' element={<Project />}>
            <Route path='bedroom' element={<Bedroom/>} />
            <Route path='bathroom' element={<Bathroom/>} />
            <Route path='kitchen' element={<Kitchen/>} />
            <Route path='livingroom' element={<Livingroom/>} />          
          </Route>
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>





    </>
  )
}

export default App
