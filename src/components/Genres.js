import React, { Component } from 'react'
import genres from '../data/genres.json'
export default class Genres extends Component {
  constructor() {
    super()
    this.state = {
      genres: []
    }
  }

  componentDidMount() {
    this.setState({ genres })
  }

  renderGenres = () => {
    return this.state.genres.map((genre) => (
      <div
        key={genre.id}
        className="card"
        style={{
          backgroundImage: `url(${genre.image_background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="overlay">
          <h3>{genre.name}</h3>
        </div>
      </div>
    ))
  }

  render() {
    return <div className="grid">{this.renderGenres()}</div>
  }
}
