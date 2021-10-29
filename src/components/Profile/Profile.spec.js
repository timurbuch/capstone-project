import { render, screen } from '@testing-library/react'
import Profile from './Profile'

const testuser = 'Test User'

describe('Profile', () => {
  it('renders', () => {
    render(<Profile user={testuser} />)
    const sectionTitle = screen.getByRole('heading', { name: 'About me:' })
    const userName = screen.getByRole('heading', { name: 'Test User' })
    const profileImg = screen.getByAltText('user profile pic')

    expect(sectionTitle).toBeInTheDocument
    expect(profileImg).toBeInTheDocument
    expect(userName).toBeInTheDocument
  })
})
