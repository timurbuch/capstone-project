import { useState } from 'react'
import styled from 'styled-components/macro'
import { StyledList } from '../PlayerList/PlayerList'

const ResultsList = ({ results }) => {
  const [isFiltered, setIsFiltered] = useState(false)
  const setIsFilteredTrue = () => {
    setIsFiltered(true)
  }
  const setIsFilteredFalse = () => {
    setIsFiltered(false)
  }
  return (
    <StyledList>
      <ButtonWrapper>
        <ResultButton onClick={setIsFilteredFalse}>
          Show all results
        </ResultButton>
        <ResultButton onClick={setIsFilteredTrue}>Show my results</ResultButton>
      </ButtonWrapper>
      {isFiltered
        ? results
            .filter(
              result => result.player_1 === 'User' || result.player_2 === 'User'
            )
            .map(result => {
              return (
                <Result key={result.id}>
                  <h3>
                    {result.player_1} vs {result.player_2}
                  </h3>
                  <span>{result.result}</span>
                </Result>
              )
            })
        : results.map(result => {
            return (
              <Result key={result.id}>
                <h3>
                  {result.player_1} vs {result.player_2}
                </h3>
                <span>{result.result}</span>
              </Result>
            )
          })}
    </StyledList>
  )
}
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const ResultButton = styled.button`
  background-color: #ffe900;
  color: #38272d;
`

const Result = styled.li`
  background-color: #ffe900;
  margin: 0;
  padding: 0.5rem;
  display: flex;
  color: #38272d;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  span {
    font-weight: bold;
  }
`
export default ResultsList
