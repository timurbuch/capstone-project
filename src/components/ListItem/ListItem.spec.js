import { render, screen } from '@testing-library/react'

import ListItem from './ListItem'

describe('ListItem', () => {
  const testName = 'Andre Agassi'
  it('renders', () => {
    render(<ListItem name={testName} />)
    const listItem = screen.getByRole('listitem')
    expect(listItem).toBeInTheDocument()
  })
  it('shows the name of a player', () => {
    render(<ListItem name={testName} />)
    const testname = screen.getByText('Andre Agassi')
    expect(testname).toBeInTheDocument()
  })
})
