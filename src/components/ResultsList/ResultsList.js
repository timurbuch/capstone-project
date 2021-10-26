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
        <AllResultsButton onClick={setIsFilteredFalse} isFiltered={isFiltered}>
          Show all results
        </AllResultsButton>
        <FilteredResultsButton
          onClick={setIsFilteredTrue}
          isFiltered={isFiltered}
        >
          Show my results
        </FilteredResultsButton>
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

const AllResultsButton = styled.button`
  background-color: ${({ isFiltered }) =>
    !isFiltered ? 'lightgrey' : '#ffe900'};
  color: #38272d;
  font-family: 'Oswald Medium';
  border-radius: 0.25rem;
`

const FilteredResultsButton = styled.button`
  background-color: ${({ isFiltered }) =>
    !isFiltered ? '#ffe900' : 'lightgrey'};
  color: #38272d;
  font-family: 'Oswald Medium';
  border-radius: 0.25rem;
`

const Result = styled.li`
  background-color: #ffe900;
  margin: 0;
  padding: 0.5rem;
  font-family: 'Oswald Medium';
  border-radius: 0.25rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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
