import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ResultForm from './ResultForm'

describe('ResultForm', () => {
  it('renders  3 input sections when the button is clicked', () => {
    render(<ResultForm />)
    const resultButton = screen.getByRole('button')
    userEvent.click(resultButton)
    const resultInputfields = screen.getAllByLabelText(/Set/)
    expect(resultInputfields).toHaveLength(3)
  })
})
