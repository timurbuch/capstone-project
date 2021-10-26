import { useState } from 'react'
import styled from 'styled-components/macro'
import ResultButton from '../ResultButton/ResultButton'

import InputBlock from '../InputBlock/InputBlock'
import { MdClose } from 'react-icons/md'

const ResultForm = ({ name, onResultSubmit, toggleChallenge }) => {
  const [resultView, setResultView] = useState(false)

  const openResultView = () => {
    setResultView(true)
  }
  const closeResultView = () => {
    setResultView(false)
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
    let result = `${player1Set1.value}:${player2Set1.value} ${player1Set2.value}:${player2Set2.value}`
    result =
      (player1Set3.value || player2Set3.value) > 0
        ? result + ` ${player1Set3.value}:${player2Set3.value}`
        : result
    onResultSubmit(name, result)
    form.reset()
    closeResultView()
    toggleChallenge()
  }

  return (
    <>
      {!resultView && <ResultButton openResultView={openResultView} />}
      {resultView && (
        <StyledForm onSubmit={handleSubmit}>
          <CloseButtonWrapper>
            <MdClose size={24} onClick={closeResultView} />
          </CloseButtonWrapper>
          <label>User vs {name}</label>

          <InputBlock set={1} necessary={true} maxScore="7" />
          <InputBlock set={2} necessary={true} maxScore="7" />
          <InputBlock set={3} necessary={false} maxScore="25" />

          <button type="submit">Submit your results</button>
        </StyledForm>
      )}
    </>
  )
}
export default ResultForm

const StyledForm = styled.form`
  background-color: black;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.25rem;
  padding: 0.25rem;
  gap: 1rem;

  width: 65vw;
  align-items: center;
  button {
    border-radius: 0.25rem;
    width: 10rem;
    font-family: 'Oswald Medium';
  }
  position: relative;
`
const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 0.25rem;
  left: 0.75rem;
`
