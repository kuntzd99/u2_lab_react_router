import { Link } from 'react-router-dom'

const Nav = () => {
  
  return (
    <header>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="games">Games</Link>
          </li>
          <li>
            <Link to="genres">Genres</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Nav;