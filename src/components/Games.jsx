import gamesArray from '../data/games.json'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Games = () => {
  const [games, setGames] = useState(gamesArray)

  let navigate = useNavigate()

  const showGame = (game) => {
    navigate(`${game.id}`)
  }

  return (
    <div>
      {
        games.map((game) => (
          <div onClick={() => showGame(game)} key={game.id}>{game.name}</div>
        ))
      }
    </div>
  )
}

export default Games