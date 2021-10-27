import { useState } from 'react'
import styled from 'styled-components/macro'
import { MdArrowBack } from 'react-icons/md'
import ChallengeButton from '../ChallengeButton/ChallengeButton'
import ResultForm from '../ResultForm/ResultForm'

const ListItem = ({
  name,
  img,
  age,
  wins,
  losses,
  challenged,
  players,
  setPlayers,
  onResultSubmit,
}) => {
  const [showDetails, setShowDetails] = useState(false)
  const [isChallenged, setIsChallenged] = useState(challenged)

  const setShowDetailsTrue = () => {
    setShowDetails(true)
  }
  const setShowDetailsFalse = event => {
    event.stopPropagation()
    setShowDetails(false)
  }
  const setChallengeStatus = (players, name) => {
    const updatedPlayers = [...players]
    const challengedPlayer = updatedPlayers.find(player => player.name === name)
    const status = challengedPlayer.challenged
    challengedPlayer.challenged = !status
    setPlayers(updatedPlayers)
  }
  const toggleChallenge = () => {
    setIsChallenged(!isChallenged)
    setChallengeStatus(players, name)
  }

  return (
    <StyledListItem onClick={setShowDetailsTrue}>
      <h4>{name}</h4>

      {showDetails && (
        <>
          <BackIconWrapper>
            <MdArrowBack
              size={36}
              onClick={event => setShowDetailsFalse(event)}
            />
          </BackIconWrapper>

          <img src={img} alt={name} />
          <ul>
            <li>Age: {age}</li>
            <li>Wins: {wins}</li>
            <li>Losses: {losses}</li>
          </ul>
          {isChallenged && (
            <ResultForm
              name={name}
              onResultSubmit={onResultSubmit}
              toggleChallenge={toggleChallenge}
            />
          )}
          {name !== 'You' && (
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
  padding: 0.5rem;
  font-family: 'Oswald Medium';
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  color: white;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.25rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  img {
    border-radius: 50%;
    height: 100px;
    width: auto;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`

const BackIconWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 5vw;
`
export default ListItem
