import ChallengeButton from './ChallengeButton'

export default {
  title: 'ChallengeButton',
  component: ChallengeButton,
}
const Template = args => <ChallengeButton {...args} />

export const basicChallengeButton = Template.bind({})
basicChallengeButton.args = {
  name: 'John McEnroe',
  id: 123,
  isChallenged: false,
}
export const activeChallengeButton = Template.bind({})
activeChallengeButton.args = {
  name: 'John McEnroe',
  id: 123,
  isChallenged: true,
}
