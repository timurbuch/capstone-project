import ResultButton from './ResultButton'
import { action } from '@storybook/addon-actions'
export default {
  title: 'ResultButton',
  component: ResultButton,
}
const Template = args => <ResultButton {...args} />

export const basicResultButton = Template.bind({})
basicResultButton.args = {
  toggleResultView: action('result'),
}
