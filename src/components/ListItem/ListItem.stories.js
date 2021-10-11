import ListItem from './ListItem'

export default {
  title: 'ListItem',
  component: ListItem,
}
const Template = args => <ListItem {...args} />

export const basicPlayerListItem = Template.bind({})
basicPlayerListItem.args = {
  name: 'John McEnroe',
  id: 123,
}
