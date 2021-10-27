import { useState } from 'react'
import styled from 'styled-components/macro'
import ResultButton from '../ResultButton/ResultButton'
import eloRater from '../../lib/eloRater'
import InputBlock from '../InputBlock/InputBlock'
import { MdClose } from 'react-icons/md'

const ResultForm = ({ name, players, onResultSubmit, toggleChallenge }) => {
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
    let result = `${player1Set1.value}:${player2Set1.value} ${player1Set2.value}:${player2Set2.value}`
    result =
      (player1Set3.value || player2Set3.value) > 0
        ? result + ` ${player1Set3.value}:${player2Set3.value}`
        : result

    const player1 = players.filter(player => player.name === 'You')[0]
    const player2 = players.filter(player => player.name === name)[0]
    let player1Rating = player1.rating
    let player2Rating = player2.rating
    if (
      (player1Set1.value >= 6 && player1Set2.value >= 6) ||
      player1Set3.value > player2Set3.value
    ) {
      const { winner: player1NewRating, loser: player2NewRating } = eloRater(
        player1Rating,
        player2Rating
      )
      player1.rating = player1NewRating
      player2.rating = player2NewRating
    } else {
      const { winner: player2NewRating, loser: player1NewRating } = eloRater(
        player2Rating,
        player1Rating
      )
      player1.rating = player1NewRating
      player2.rating = player2NewRating
    }

    onResultSubmit(name, result)
    form.reset()
    toggleResultView()
    toggleChallenge()
  }

  return (
    <>
      {!resultView && <ResultButton openResultView={toggleResultView} />}
      {resultView && (
        <StyledForm onSubmit={handleSubmit}>
          <CloseButtonWrapper>
            <MdClose
              size={24}
              onClick={toggleResultView}
              aria-label="CloseButton"
            />
          </CloseButtonWrapper>
          <label>User vs {name}</label>
          <InputBlock setNumber={1} required={true} maxScore="7" />
          <InputBlock setNumber={2} required={true} maxScore="7" />
          <InputBlock setNumber={3} required={false} maxScore="25" />
          <button>Submit your results</button>
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
  position: relative;
  button {
    border-radius: 0.25rem;
    width: 10rem;
    font-family: 'Oswald Medium';
  }
`
const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 0.25rem;
  left: 0.75rem;
`
