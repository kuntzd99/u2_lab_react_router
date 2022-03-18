import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const GameDetails = (props) => {
  let { id } = useParams()

  const [gameId, setGameId] = useState(id)
  const [game, setGame] = useState(null)

  useEffect(() => {
    let selectedGame = props.games.find(
      (game) => game.id === parseInt(id)
    )
    setGame(selectedGame)
  }, [props.games, id])

  return (
    <div>{game.name}</div>
  )
}

export default GameDetails