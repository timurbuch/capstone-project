import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ResultsList from './ResultsList'

const testData = [
  {
    id: 1,
    player_1: 'Boris Becker',
    player_2: 'Andre Agassi',
    result: '7:5 6:4',
  },
  {
    id: 2,
    player_1: 'John McEnroe',
    player_2: 'Bjorn Borg',
    result: '7:5 6:4',
  },
  { id: 3, player_1: 'Rafa Nadal', player_2: 'User', result: '7:5 6:4' },
  {
    id: 4,
    player_1: 'Daniil Medvedev',
    player_2: 'Andre Agassi',
    result: '7:5 6:4',
  },
  { id: 5, player_1: 'User', player_2: 'Andre Agassi', result: '7:5 6:4' },
  {
    id: 6,
    player_1: 'Roger Federer',
    player_2: 'Bjorn Borg',
    result: '7:5 6:4',
  },
]

describe('ResultsList', () => {
  it('renders', () => {
    render(<ResultsList results={testData} />)
    const resultsList = screen.getByRole('list')
    expect(resultsList).toBeInTheDocument()
  })
  it('renders as many listItems as testData contains', () => {
    render(<ResultsList results={testData} />)
    const resultsListItems = screen.getAllByRole('listitem')
    expect(resultsListItems).toHaveLength(6)
  })
  it('renders a filtered list only containing the users results when a button is clicked', () => {
    render(<ResultsList results={testData} />)
    const filteredResultsButton = screen.getByText(/my/)
    userEvent.click(filteredResultsButton)
    const resultsListItems = screen.getAllByRole('listitem')
    expect(resultsListItems).toHaveLength(2)
  })
})
