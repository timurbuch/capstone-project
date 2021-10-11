import styled from 'styled-components/macro'

const ListItem = ({ name }) => {
  return <StyledListItem role="listitem">{name}</StyledListItem>
}

const StyledListItem = styled.p`
  background-color: #82ef00;
  margin: 0 1rem;
  padding: auto;
  display: flex;
  align-self: center;
  height: 2rem;
  width: 100%;
`
export default ListItem
