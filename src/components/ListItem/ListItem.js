import styled from 'styled-components/macro'

const ListItem = ({ name }) => {
  return <StyledListItem>{name}</StyledListItem>
}

const StyledListItem = styled.li`
  background-color: #82ef00;
  margin: 0;
  padding: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 100%;
`
export default ListItem
