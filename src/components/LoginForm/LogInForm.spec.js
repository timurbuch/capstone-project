import { render, screen } from '@testing-library/react'

import LoginForm from './LoginForm'

describe('LoginForm', () => {
  it('renders a form with an input field', () => {
    render(<LoginForm />)
    const nameInput = screen.getByPlaceholderText('Username')
    expect(nameInput).toBeInTheDocument()
  })
})
