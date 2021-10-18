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
  border-radius: 1rem;
  padding: 3px;
  color: whitesmoke;
  background-color: black;
`
