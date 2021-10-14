import { render, screen } from '@testing-library/react'

import PlayerList from './PlayerList'

const testData = [
  { name: 'player 1', id: 1 },
  { name: 'player 2', id: 2 },
  { name: 'player 3', id: 3 },
]

describe('PlayerList', () => {
  it('renders', () => {
    render(<PlayerList players={testData} />)
    const playerList = screen.getByRole('list')
    expect(playerList).toBeInTheDocument()
  })
  it('renders as many listItems as testData contains', () => {
    render(<PlayerList players={testData} />)
    const playerListItems = screen.getAllByRole('listitem')
    expect(playerListItems).toHaveLength(3)
  })
})
