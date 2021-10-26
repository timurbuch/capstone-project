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
  height: 90vh;
  margin: 0 1.5rem;
  background-color: #4758d6;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  border-radius: 0em.25rem;
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
