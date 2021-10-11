import PlayerList from './PlayerList'

export default {
  title: 'PlayerList',
  component: PlayerList,
}
const Template = args => <PlayerList {...args} />

export const basicPlayerList = Template.bind({})
basicPlayerList.args = {
  data: [
    { id: 1, name: 'John McEnroe' },
    { id: 2, name: 'Bjorn Borg' },
    { id: 3, name: 'Boris Becker' },
    { id: 4, name: 'Rafa Nadal' },
    { id: 5, name: 'Roger Federer' },
  ],
}
