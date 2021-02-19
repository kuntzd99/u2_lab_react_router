import React, { Component } from 'react'
import games from '../data/games.json'
import loader from '../assets/loader.gif'
export default class GameDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameId: props.match.params.game_id,
      game: null
    }
  }

  componentDidMount() {
    let game = games.find((game) => game.id === parseInt(this.state.gameId))
    this.setState({ game })
  }

  render() {
    if (this.state.game) {
      return (
        <div className="layout details">
          <img src={this.state.game.background_image} alt="backround" />
          <div>
            <h2>{this.state.game.name}</h2>
            <p>
              Rated {`${this.state.game.esrb_rating.name.charAt(0)}`} for{' '}
              {this.state.game.esrb_rating.name}
            </p>
            <p>{this.state.game.rating}/10</p>
          </div>
        </div>
      )
    }
    return (
      <div className="loader">
        <img src={loader} alt="loader" />
      </div>
    )
  }
}
