import { render, screen } from '@testing-library/react'

import PlayerList from './PlayerList'

const testData = [
  { name: 'player 1', id: 1 },
  { name: 'player 2', id: 2 },
  { name: 'player 3', id: 3 },
]

describe('PlayerList', () => {
  it('renders', () => {
    render(<PlayerList data={testData} />)
    const playerListItem = screen.getByText('player 1')
    expect(playerListItem).toBeInTheDocument()
  })
  it('renders as many listItems as testData contains', () => {
    render(<PlayerList data={testData} />)
    const playerListItems = screen.getAllByText(/player/)
    expect(playerListItems).toHaveLength(3)
  })
})
