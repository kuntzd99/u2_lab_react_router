import React, { Component } from 'react'
import games from '../data/games.json'
export default class Games extends Component {
  constructor() {
    super()
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    this.setState({ games })
  }

  renderGames = () => {
    return this.state.games.map((game) => (
      <div
        key={game.id}
        className="card"
        style={{
          backgroundImage: `url(${game.background_image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
        onClick={() => this.props.history.push(`/games/${game.id}`)}
      >
        <div className="overlay">
          <h3>{game.name}</h3>
        </div>
      </div>
    ))
  }

  render() {
    return <div className="grid">{this.renderGames()}</div>
  }
}
