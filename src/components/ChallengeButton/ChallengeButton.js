import styled from 'styled-components/macro'

const ChallengeButton = ({ name, isChallenged, toggleChallenge }) => {
  const handleChallenge = () => {
    toggleChallenge()
  }

  return (
    <StyledChallengeButton
      isChallenged={isChallenged}
      onClick={handleChallenge}
    >
      {isChallenged ? 'Cancel Challenge' : `Challenge ${name}`}
    </StyledChallengeButton>
  )
}

const StyledChallengeButton = styled.button`
  border-radius: 1rem;
  padding: 3px;
  color: whitesmoke;
  background-color: ${({ isChallenged }) =>
    isChallenged ? '#ea3a3a' : '#27E64B'};
`
export default ChallengeButton
