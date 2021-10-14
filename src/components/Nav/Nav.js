import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { MdSportsTennis, MdLeaderboard } from 'react-icons/md'

const Nav = () => {
  return (
    <NavBar>
      <Link to="/">
        <IconContext.Provider value={{ color: 'white', size: '8vh' }}>
          <NavButton>
            <MdLeaderboard />
          </NavButton>
        </IconContext.Provider>
      </Link>
      <Link to="/challenge">
        <IconContext.Provider value={{ color: 'white', size: '8vh' }}>
          <NavButton>
            <MdSportsTennis />
          </NavButton>
        </IconContext.Provider>
      </Link>
    </NavBar>
  )
}

const NavBar = styled.ul`
  margin: 0;
  padding: 0;
  background-color: grey;
  border-top: 1px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  list-style-type: none;
  position: sticky;
  bottom: 0;
`

const NavButton = styled.li`
  border: 1px solid white;
  color: white;
  background-color: black;
  text-align: center;
  padding: 3.5vh 0;
  height: 15vh;
  width: 25vw;
`
export default Nav
