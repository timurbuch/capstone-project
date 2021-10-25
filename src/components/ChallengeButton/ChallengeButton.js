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
  border-radius: 0.25rem;
  padding: 3px;
  width: 10rem;
  font-family: 'Oswald Medium';
  color: ${({ isChallenged }) => (isChallenged ? 'white' : 'black')};
  background-color: ${({ isChallenged }) =>
    isChallenged ? '#E71D1D' : '#27E64B'};
`
export default ChallengeButton
