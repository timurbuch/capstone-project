import { useState } from 'react'
import styled from 'styled-components/macro'

import ChallengeButton from '../ChallengeButton/ChallengeButton'

const ListItem = ({ name, img, age, wins, losses }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [isChallenged, setIsChallenged] = useState(false)

  const setShowDetailsTrue = () => {
    setShowDetails(true)
  }
  const setShowDetailsFalse = () => {
    setShowDetails(false)
  }
  const toggleChallenge = () => {
    setIsChallenged(!isChallenged)
  }
  return (
    <StyledListItem>
      <ClickArea onClick={setShowDetailsTrue}>{name}</ClickArea>
      {showDetails && (
        <>
          <BackButton onClick={setShowDetailsFalse}>Return</BackButton>
          <img src={img} alt={name} />
          <ul>
            <li>Age: {age}</li>
            <li>Wins: {wins}</li>
            <li>Losses: {losses}</li>
          </ul>
          <ChallengeButton
            toggleChallenge={toggleChallenge}
            name={name}
            isChallenged={isChallenged}
          />
        </>
      )}
    </StyledListItem>
  )
}

const StyledListItem = styled.li`
  background-color: #82ef00;
  margin: 0;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    border-radius: 50%;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`
const ClickArea = styled.div`
  background-color: #82ef00;
  width: 100%;
  text-align: center;
`

const BackButton = styled.button`
  background-color: lightyellow;
`
export default ListItem
