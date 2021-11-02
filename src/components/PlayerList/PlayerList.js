import ListItem from '../ListItem/ListItem.js'
import styled from 'styled-components/macro'
import { useEffect } from 'react'

const PlayerList = ({ players, onPlayersChange, onResultSubmit, username }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sortedPlayers = players.sort((a, b) => b.rating - a.rating)

  return (
    <StyledList>
      {sortedPlayers.map(player => {
        return (
          <ListItem
            key={player.id}
            name={player.name}
            rank={sortedPlayers.indexOf(player) + 1}
            img={player.img}
            wins={player.wins}
            rating={player.rating}
            losses={player.losses}
            challenged={player.challenged}
            players={players}
            onPlayersChange={onPlayersChange}
            onResultSubmit={onResultSubmit}
            username={username}
          />
        )
      })}
    </StyledList>
  )
}

export const StyledList = styled.ul`
  margin: 0 0 2vh 0;
  padding: 2rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  background-color: white;
  min-height: 100vh;
  overflow: auto;
`

export default PlayerList
