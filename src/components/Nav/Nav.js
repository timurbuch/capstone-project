import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { MdSportsTennis, MdLeaderboard } from 'react-icons/md'

const Nav = () => {
  return (
    <NavBar>
      <Link to="/">
        <IconContext.Provider value={{ color: 'white', size: '7vh' }}>
          <NavLink>
            <MdLeaderboard />
          </NavLink>
        </IconContext.Provider>
      </Link>
      <Link to="/challenge">
        <IconContext.Provider value={{ color: 'white', size: '7vh' }}>
          <NavLink>
            <MdSportsTennis />
          </NavLink>
        </IconContext.Provider>
      </Link>
    </NavBar>
  )
}

const NavBar = styled.ul`
  margin: 0;
  padding: 0;
  background-color: black;
  border-top: 1px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 12vh;
  list-style-type: none;
  position: sticky;
  bottom: 0;
`

const NavLink = styled.li`
  color: white;
  background-color: black;
  text-align: center;
  padding: 2.5vh 0;
  height: 12vh;
  width: 17vw;
`
export default Nav
