import './styles/App.css'
import React, { Component } from 'react'
import Games from './components/Games'
import Nav from './components/Nav'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Genres from './components/Genres'
import GameDetails from './components/GameDetails'

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/games" component={Games} />
            <Route path="/genres" component={Genres} />
            <Route path="/games/:game_id" component={GameDetails} />
          </Switch>
        </main>
      </div>
    )
  }
}
