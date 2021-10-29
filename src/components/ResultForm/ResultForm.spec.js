import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ResultForm from './ResultForm'

describe('ResultForm', () => {
  it('renders 6 input fields when the button is clicked', () => {
    render(<ResultForm />)
    const resultButton = screen.getByRole('button')
    userEvent.click(resultButton)
    const resultInputfields = screen.getAllByLabelText(/result/)
    expect(resultInputfields).toHaveLength(6)
  })
})
