import styled from 'styled-components/macro'

const InputBlock = ({ set, necessary, maxScore }) => {
  return (
    <InputWrapper>
      <span>Set {set} </span>
      <label htmlFor={`user-result-set-${set}`}>User result</label>
      <input
        type="number"
        id={`user-result-set-${set}`}
        min="0"
        max={maxScore}
        name={`player1Set${set}`}
        required={necessary}
      />{' '}
      : <label htmlFor={`oppenent-result-set-${set}`}>Opponent result</label>
      <input
        type="number"
        id={`oppenent-result-set-${set}`}
        min="0"
        max={maxScore}
        name={`player2Set${set}`}
        required={necessary}
      />
    </InputWrapper>
  )
}
const InputWrapper = styled.div`
  display: flex;
  padding: 0.125rem 0;
  justify-content: space-evenly;
  label {
    display: inline-block;
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    width: 1px;
  }
  span {
    width: 3rem;
  }
  input {
    width: 2.5rem;
    margin: 0 0.125rem;
  }
`
export default InputBlock
