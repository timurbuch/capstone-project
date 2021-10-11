import { render, screen } from '@testing-library/react'
import App from './App'

test('renders a playerListItem', () => {
  render(<App />)
  const listElement = screen.getByText('player 1')
  expect(listElement).toBeInTheDocument()
})
