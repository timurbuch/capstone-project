import styled from 'styled-components/macro'

const InputBlock = ({ setNumber, required, maxScore }) => {
  return (
    <InputWrapper>
      <span>Set {setNumber} </span>
      <label htmlFor={`user-result-setNumber-${setNumber}`}>User result</label>
      <input
        type="number"
        id={`user-result-setNumber-${setNumber}`}
        min="0"
        max={maxScore}
        name={`player1Set${setNumber}`}
        required={required}
      />{' '}
      :{' '}
      <label htmlFor={`oppenent-result-setNumber-${setNumber}`}>
        Opponent result
      </label>
      <input
        type="number"
        id={`oppenent-result-setNumber-${setNumber}`}
        min="0"
        max={maxScore}
        name={`player2Set${setNumber}`}
        required={required}
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
