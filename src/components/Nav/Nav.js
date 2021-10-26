import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import {
  MdSportsTennis,
  MdLeaderboard,
  MdHistory,
  MdPerson,
} from 'react-icons/md'

const Nav = () => {
  const navigationData = [
    {
      path: '/',
      icon: <MdLeaderboard aria-label="PlayerList" />,
    },
    {
      path: '/challenge',
      icon: <MdSportsTennis aria-label="ChallengeList" />,
    },
    {
      path: '/results',
      icon: <MdHistory aria-label="ResultsList" />,
    },
    {
      path: '/profile',
      icon: <MdPerson aria-label="Userprofile" />,
    },
  ]

  return (
    <NavBar>
      {navigationData.map(({ path, icon }) => (
        <NavLink exact to={path} key={path}>
          <IconContext.Provider value={{ color: 'white', size: '5vh' }}>
            {icon}
          </IconContext.Provider>
        </NavLink>
      ))}
    </NavBar>
  )
}

const NavBar = styled.nav`
  margin: 0;
  padding: 0;
  background-color: black;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  position: sticky;
  bottom: 0;
`
export default Nav
