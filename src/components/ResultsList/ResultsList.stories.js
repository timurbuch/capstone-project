import ResultsList from './ResultsList'

export default {
  title: 'ResultsList',
  component: ResultsList,
}
const Template = args => <ResultsList {...args} />

export const basicResultsList = Template.bind({})
basicResultsList.args = {
  results: [
    {
      id: 1,
      player_1: 'Boris Becker',
      player_2: 'Andre Agassi',
      result: '7:5 6:4',
    },
    {
      id: 2,
      player_1: 'John McEnroe',
      player_2: 'Bjorn Borg',
      result: '7:5 6:4',
    },
    { id: 3, player_1: 'Rafa Nadal', player_2: 'User', result: '7:5 6:4' },
    {
      id: 4,
      player_1: 'Daniil Medvedev',
      player_2: 'Andre Agassi',
      result: '7:5 6:4',
    },
    { id: 5, player_1: 'User', player_2: 'Andre Agassi', result: '7:5 6:4' },
    {
      id: 6,
      player_1: 'Roger Federer',
      player_2: 'Bjorn Borg',
      result: '7:5 6:4',
    },
  ],
}
