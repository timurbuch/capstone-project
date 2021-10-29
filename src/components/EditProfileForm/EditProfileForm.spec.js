import { render, screen } from '@testing-library/react'

import EditProfileForm from './EditProfileForm'

const testProfileInformation = {
  name: 'John Doe',
  information: 'Let your opponents get to know you better!',
  img:
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
}

describe('EditProfileForm', () => {
  it('renders a form with 2 input fields', () => {
    render(<EditProfileForm profileInformation={testProfileInformation} />)
    const nameInput = screen.getByLabelText('Name:')
    expect(nameInput).toBeInTheDocument()
    const infoInput = screen.getByLabelText('About you:')
    expect(infoInput).toBeInTheDocument()
  })
})
