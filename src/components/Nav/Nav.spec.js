import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import Nav from './Nav'
describe('Nav', () => {
  it('renders four navigation elements', () => {
    render(
      <Router>
        <Nav />
      </Router>
    )

    const navLinks = screen.getAllByLabelText(/List/)
    const profileLink = screen.getAllByLabelText('Userprofile')
    navLinks.push(profileLink)
    expect(navLinks).toHaveLength(4)
  })
})
