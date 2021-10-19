import styled from 'styled-components/macro'

const Profile = () => {
  return (
    <ProfileWrapper>
      <h2>Your Profile</h2>
      <AvatarWrapper>
        <img src="https://picsum.photos/200" alt="user profile pic" />
        <h3>Test User</h3>
      </AvatarWrapper>
      <p>Hier könnte Ihre Werbung stehen...</p>
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.section`
  height: 88vh;
  margin: 0 1rem;
  background-color: #4758d6;
  border-left: 1px solid white;
  border-right: 1px solid white;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  align-items: center;
`

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    border-radius: 50%;
  }
`
export default Profile
