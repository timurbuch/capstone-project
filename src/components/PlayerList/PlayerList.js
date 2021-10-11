import ListItem from '../ListItem/ListItem.js'
import styled from 'styled-components/macro'

const PlayerList = ({ data }) => {
  return (
    <StyledList>
      {data.map(player => {
        return <ListItem key={player.id} name={player.name} />
      })}
    </StyledList>
  )
}

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: lightgrey;
  height: 100vh;
`
export default PlayerList
