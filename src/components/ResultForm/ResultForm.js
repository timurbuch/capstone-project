import { useState } from 'react'
import styled from 'styled-components/macro'
import ResultButton from '../ResultButton/ResultButton'

const ResultForm = ({ name, onResultSubmit }) => {
  const [resultView, setResultView] = useState(false)

  const toggleResultView = () => {
    setResultView(!resultView)
  }
  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const {
      player1Set1,
      player2Set1,
      player1Set2,
      player2Set2,
      player1Set3,
      player2Set3,
    } = form.elements
    let result =
      `${player1Set1.value}:${player2Set1.value} ${player1Set2.value}:${player2Set2.value}` +
      player1Set3
        ? `${player1Set3}:${player2Set3}`
        : ''
    onResultSubmit(name, result)
    form.reset()
    toggleResultView()
  }

  return (
    <>
      <ResultButton toggleResultView={toggleResultView} />
      {resultView && (
        <StyledForm onSubmit={handleSubmit}>
          <label>User vs {name}</label>
          <SetInput>
            <label>Set 1</label>
            <input type="number" max="7" name="player1Set1" required /> :{' '}
            <input type="number" max="7" name="player2Set1" required />
          </SetInput>
          <SetInput>
            <label>Set 2</label>
            <input type="number" max="7" name="player1Set2" required /> :{' '}
            <input type="number" max="7" name="player2Set2" required />
          </SetInput>
          <SetInput>
            <label>Set 3</label>
            <input type="number" max="20" name="player1Set3" /> :{' '}
            <input type="number" max="20" name="player2Set3" />
          </SetInput>

          <button type="submit">Submit your results</button>
        </StyledForm>
      )}
    </>
  )
}
export default ResultForm

const StyledForm = styled.form`
  background-color: #4758d6;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 15vw;
`

const SetInput = styled.div`
  display: flex;
  padding: 0.25rem 0;
  justify-content: space-evenly;
  label {
    width: 4em;
  }

  input {
    width: 1rem;
  }
`
