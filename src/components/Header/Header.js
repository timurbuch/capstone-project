import styled from 'styled-components/macro'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>RNKR</Logo>
      <Subsection></Subsection>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: black;
  color: white;
  height: 10vh;
  position: sticky;
  top: 0px;
  margin: 0;
  z-index: 10;
`
const Logo = styled.h2`
  font-family: 'Nfl Tampa Bay Buccaneers';
  font-size: 3rem;
  letter-spacing: 0.26rem;
  margin: 0;
  padding: 0.5rem 1rem;
  width: fit-content;
`
const Subsection = styled.h4`
  font-size: 20px;
`
export default Header
