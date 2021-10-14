import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ChallengeButton from './ChallengeButton'

describe('ChallengeButton', () => {
  const mockToggleChallenge = jest.fn()
  const mockIsChallenged = true

  it('renders', () => {
    render(<ChallengeButton />)
    const challengeButton = screen.getByRole('button')
    expect(challengeButton).toBeInTheDocument()
  })
  it('calls a function when clicked', () => {
    render(
      <ChallengeButton
        name="Peter Pan"
        isChallenged={mockIsChallenged}
        toggleChallenge={mockToggleChallenge}
      />
    )
    const challengeButton = screen.getByRole('button')
    userEvent.click(challengeButton)
    expect(mockToggleChallenge).toHaveBeenCalled
  })
})
