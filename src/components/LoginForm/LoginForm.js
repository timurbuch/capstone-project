import styled from 'styled-components/macro'

const LoginForm = ({ onUserSubmit }) => {
  const handleUserSubmit = event => {
    event.preventDefault()
    const form = event.target
    const { username } = form.elements
    onUserSubmit(username.value)
  }
  return (
    <LoginContainer>
      <h1>RNKR</h1>
      <form
        onSubmit={event => {
          handleUserSubmit(event)
        }}
      >
        <label htmlFor="username"></label>
        <input id="username" type="text" placeholder="Username"></input>
        {/* <label htmlFor="password"></label>
        <input id="password" type="text" placeholder="Password"></input> */}
        <LogInButton>Log In</LogInButton>
        <Separator />
      </form>
      <CreateAccountButton>Create Account</CreateAccountButton>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  background-color: black;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 128px;
    letter-spacing: 0.125rem;
    font-family: 'Nfl Tampa bay Buccaneers';
    margin: 0;
    padding-left: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  input {
    border-radius: 0.25rem;
    border: white 1px solid;
    font-family: 'Oswald Medium';
  }
`

const LogInButton = styled.button`
  margin: 0.125rem 0;
  border-radius: 0.25rem;
  font-family: 'Oswald Medium';
  background-color: #4758d6;
  color: white;
`
const Separator = styled.div`
  height: 0.125rem;
  background-color: lightgrey;
  opacity: 0.75;
`
const CreateAccountButton = styled.button`
  margin: 0.125rem 0;
  border-radius: 0.25rem;
  font-family: 'Oswald Medium';
  background-color: black;
  border: 1px solid #4758d6;
  color: white;
`
export default LoginForm
