import { render, screen } from '@testing-library/react'
import Profile from './Profile'

describe('Profile', () => {
  it('renders', () => {
    render(<Profile />)
    const sectionTitle = screen.getByRole('heading', { name: 'Your Profile' })
    const userName = screen.getByRole('heading', { name: 'Test User' })
    const profileImg = screen.getByAltText('user profile pic')
    expect(sectionTitle).toBeInTheDocument
    expect(profileImg).toBeInTheDocument
    expect(userName).toBeInTheDocument
  })
})
