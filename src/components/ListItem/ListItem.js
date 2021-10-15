import { useState } from 'react'
import styled from 'styled-components/macro'

import ChallengeButton from '../ChallengeButton/ChallengeButton'
import ResultButton from '../ResultButton/ResultButton'

const ListItem = ({ name, img, age, wins, losses, challenged }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [isChallenged, setIsChallenged] = useState(challenged)
  const [resultView, setResultView] = useState(false)

  const setShowDetailsTrue = () => {
    setShowDetails(true)
  }
  const setShowDetailsFalse = () => {
    setShowDetails(false)
  }
  const toggleChallenge = () => {
    setIsChallenged(!isChallenged)
  }
  const toggleResultView = () => {
    setResultView(!resultView)
  }
  return (
    <StyledListItem>
      <ClickArea onClick={setShowDetailsTrue}>
        <h4>{name}</h4>
      </ClickArea>
      {showDetails && (
        <>
          <BackButton onClick={setShowDetailsFalse}>Return</BackButton>
          <img src={img} alt={name} />
          <ul>
            <li>Age: {age}</li>
            <li>Wins: {wins}</li>
            <li>Losses: {losses}</li>
          </ul>
          {isChallenged && <ResultButton toggleResultView={toggleResultView} />}
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
  background-color: #4758d6;
  margin: 0;
  padding: 1rem;
  display: flex;
  color: white;
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
  background-color: #4758d6;
  color: white;
  width: 100%;
  height: 2rem;
  text-align: center;
`

const BackButton = styled.button`
  background-color: lightyellow;
`
export default ListItem
