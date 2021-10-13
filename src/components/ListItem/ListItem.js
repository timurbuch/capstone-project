import { useState } from 'react'
import styled from 'styled-components/macro'

const ListItem = ({ name, img, age, wins, losses }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <StyledListItem onClick={toggleDetails}>
      {name}
      {showDetails && (
        <>
          <img src={img} alt={name} />
          <ul>
            <li>Age: {age}</li>
            <li>Wins: {wins}</li>
            <li>Losses: {losses}</li>
          </ul>
        </>
      )}
    </StyledListItem>
  )
}

const StyledListItem = styled.li`
  background-color: #82ef00;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  min-height: 2rem;
  width: 100%;
  img {
    border-radius: 50%;
  }
  ul {
    list-style-type: none;
  }
`

export default ListItem
