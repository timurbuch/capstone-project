import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import Nav from './Nav'
describe('Nav', () => {
  it('renders two navigation elements', () => {
    render(
      <Router>
        <Nav />
      </Router>
    )

    const navLinks = screen.getAllByLabelText(/List/)
    expect(navLinks).toHaveLength(2)
  })
})
