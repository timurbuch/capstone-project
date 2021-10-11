import { render, screen } from '@testing-library/react'

import ListItem from './ListItem'
const testName = 'Test'

describe('ListItem', () => {
  it('renders', () => {
    render(<ListItem name={testName} />)
    const listItem = screen.getByRole('listitem')
    expect(listItem).toBeInTheDocument()
  })
})
