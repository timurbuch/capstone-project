import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ResultButton from './ResultButton'

describe('ResultButton', () => {
  const mockToggleResultView = jest.fn()
  it('renders a button', () => {
    render(<ResultButton />)
    const resultButton = screen.getByRole('button')
    expect(resultButton).toBeInTheDocument()
  })
  it('calls a function when clicked', () => {
    render(<ResultButton toggleResultView={mockToggleResultView} />)
    const resultButton = screen.getByRole('button')
    userEvent.click(resultButton)
    expect(mockToggleResultView).toHaveBeenCalled
  })
})
