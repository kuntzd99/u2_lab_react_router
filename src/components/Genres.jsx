import genresArray from '../data/genres'
import { useState } from 'react'

const Genres = () => {
  const [genres, setGenres] = useState(genresArray)

  return (
    <div>
      {
        genres.map((genre) => (
          <div>{genre.name}</div>
        ))
      }
    </div>
  )
}

export default Genres