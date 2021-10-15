import ChallengeList from './ChallengeList'

export default {
  title: 'ChallengeList',
  component: ChallengeList,
}
const Template = args => <ChallengeList {...args} />

export const basicChallengeList = Template.bind({})
basicChallengeList.args = {
  players: [
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
  ],
}
