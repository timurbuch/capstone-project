import { render, screen } from '@testing-library/react'

import ChallengeList from './ChallengeList'

const testData = [
  {
    id: 1,
    name: 'John McEnroe',
    age: 57,
    img: 'https://picsum.photos/200',
    wins: 22,
    losses: 3,
    challenged: true,
  },
  {
    id: 2,
    name: 'Bjorn Borg',
    age: 62,
    img: 'https://picsum.photos/200',
    wins: 27,
    losses: 7,
    challenged: false,
  },
  {
    id: 3,
    name: 'Boris Becker',
    age: 49,
    img: 'https://picsum.photos/200',
    wins: 45,
    losses: 3,
    challenged: false,
  },
  {
    id: 4,
    name: 'Rafa Nadal',
    age: 33,
    img: 'https://picsum.photos/200',
    wins: 34,
    losses: 8,
    challenged: true,
  },
  {
    id: 5,
    name: 'Roger Federer',
    age: 37,
    img: 'https://picsum.photos/200',
    wins: 88,
    losses: 13,
    challenged: true,
  },
  {
    id: 6,
    name: 'Daniil Medvedev',
    age: 27,
    img: 'https://picsum.photos/200',
    wins: 17,
    losses: 13,
    challenged: false,
  },
]

describe('ChallengeList', () => {
  it('renders', () => {
    render(<ChallengeList players={testData} />)
    const challengeList = screen.getByRole('list')
    expect(challengeList).toBeInTheDocument()
  })
  it('renders only listItems with challenged property', () => {
    render(<ChallengeList players={testData} />)
    const challengeListItems = screen.getAllByRole('listitem')
    expect(challengeListItems).toHaveLength(3)
  })
})
