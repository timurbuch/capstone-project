import styled from 'styled-components/macro'

const ResultButton = ({ toggleResultView }) => {
  return (
    <StyledResultButton onClick={toggleResultView}>
      Submit match result
    </StyledResultButton>
  )
}

export default ResultButton

const StyledResultButton = styled.button`
  border-radius: 1rem;
  padding: 3px;
  color: whitesmoke;
  background-color: lightgrey;
`
