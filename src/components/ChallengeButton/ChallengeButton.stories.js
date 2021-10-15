import ChallengeButton from './ChallengeButton'
import { action } from '@storybook/addon-actions'
export default {
  title: 'ChallengeButton',
  component: ChallengeButton,
}
const Template = args => <ChallengeButton {...args} />

export const basicChallengeButton = Template.bind({})
basicChallengeButton.args = {
  toggleChallenge: action('challenge on'),
  name: 'John McEnroe',
  id: 123,
  isChallenged: false,
}
export const activeChallengeButton = Template.bind({})
activeChallengeButton.args = {
  toggleChallenge: action('challenge off'),
  name: 'John McEnroe',
  id: 123,
  isChallenged: true,
}
