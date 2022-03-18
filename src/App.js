import './styles/App.css'
import React from 'react'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Games from './components/Games'
import Genres from './components/Genres'
import GameDetails from './components/GameDetails'

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>
    </div>
  )
}

export default App
