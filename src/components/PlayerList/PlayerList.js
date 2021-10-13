import ListItem from '../ListItem/ListItem.js'
import styled from 'styled-components/macro'

const PlayerList = ({ data }) => {
  return (
    <StyledList>
      {data.map(player => {
        return (
          <ListItem
            key={player.id}
            name={player.name}
            img={player.img}
            age={player.age}
            wins={player.wins}
            losses={player.losses}
          />
        )
      })}
    </StyledList>
  )
}

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  background-color: grey;
  min-height: 100vh;
  overflow: auto;
`

export default PlayerList
