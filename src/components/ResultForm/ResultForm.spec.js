import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ResultForm from './ResultForm'

describe('ResultForm', () => {
  it('renders input field when the button is clicked', () => {
    render(<ResultForm />)
    const resultButton = screen.getByRole('button')
    userEvent.click(resultButton)
    const resultInputfield = screen.getByLabelText('Results', {
      selector: 'input',
    })
    expect(resultInputfield).toBeInTheDocument()
  })
})
