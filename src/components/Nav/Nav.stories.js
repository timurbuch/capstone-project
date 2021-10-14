import Nav from './Nav'

export default {
  title: 'Nav',
  component: Nav,
}
const Template = args => <Nav {...args} />

export const basicNav = Template.bind({})
basicNav.args = {}
