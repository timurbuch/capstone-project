import styled from 'styled-components/macro'

const ResultButton = ({ toggleResultView }) => {
  const handleResultView = () => {
    toggleResultView()
  }
  return (
    <StyledResultButton onClick={handleResultView}>
      Submit match result
    </StyledResultButton>
  )
}

export default ResultButton

const StyledResultButton = styled.button`
  border-radius: 0.25rem;
  width: 10rem;
  font-family: 'Oswald Medium';
  padding: 3px;
  color: whitesmoke;
  background-color: black;
`
