import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Nav extends Component {
  render() {
    return (
      <header>
        <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/games">Games</NavLink>
            </li>
            <li>
              <NavLink to="/genres">Genres</NavLink>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
