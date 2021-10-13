import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ListItem from './ListItem'

describe('ListItem', () => {
  const testName = 'Andre Agassi'
  const testAge = 27
  const testWins = 11
  const testLosses = 25
  const testImg = 'https://picsum.photos/200'
  it('renders', () => {
    render(<ListItem name={testName} />)
    const listItem = screen.getByRole('listitem')
    expect(listItem).toBeInTheDocument()
  })
  it('shows the name of a player', () => {
    render(
      <ListItem
        name={testName}
        age={testAge}
        wins={testWins}
        losses={testLosses}
        img={testImg}
      />
    )
    const testname = screen.getByText('Andre Agassi')
    expect(testname).toBeInTheDocument()
  })
  it('has shows details after being clicked', () => {
    render(
      <ListItem
        name={testName}
        age={testAge}
        wins={testWins}
        losses={testLosses}
        img={testImg}
      />
    )
    const listItem = screen.getByRole('listitem')
    userEvent.click(listItem)
    const testimg = screen.getByAltText('Andre Agassi')
    expect(testimg).toBeInTheDocument()
  })
})
