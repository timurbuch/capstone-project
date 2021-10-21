import ListItem from '../ListItem/ListItem.js'
import styled from 'styled-components/macro'

const PlayerList = ({ players, setPlayers, onResultSubmit }) => {
  return (
    <StyledList>
      {players.map(player => {
        return (
          <ListItem
            key={player.id}
            name={player.name}
            img={player.img}
            age={player.age}
            wins={player.wins}
            losses={player.losses}
            challenged={player.challenged}
            players={players}
            setPlayers={setPlayers}
            onResultSubmit={onResultSubmit}
          />
        )
      })}
    </StyledList>
  )
}

export const StyledList = styled.ul`
  margin: 0;
  padding: 2rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  background-color: black;
  min-height: 100vh;
  overflow: auto;
`

export default PlayerList
