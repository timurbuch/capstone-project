import { useState } from 'react'
import styled from 'styled-components/macro'
import ResultButton from '../ResultButton/ResultButton'

const ResultForm = () => {
  const [resultView, setResultView] = useState(false)

  const toggleResultView = () => {
    setResultView(!resultView)
  }
  return (
    <>
      <ResultButton toggleResultView={toggleResultView} />
      {resultView && (
        <StyledForm>
          <label htmlFor="result">Results</label>
          <input
            type="text"
            id="result"
            pattern="/(\d+)\s*:\s*(\d+)\s*[,;]?/g"
            placeholder="0:0 0:0"
          ></input>
          <button type="submit">Submit your results</button>
        </StyledForm>
      )}
    </>
  )
}
export default ResultForm

const StyledForm = styled.form`
  background-color: #4758d6;
`
