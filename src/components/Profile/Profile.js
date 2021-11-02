import styled from 'styled-components/macro'
import { useState } from 'react'
import { MdEdit } from 'react-icons/md'
import useStateWithLocalStorage from '../../hooks/useStateWithLocalStorage'
import EditProfileForm from '../EditProfileForm/EditProfileForm'

const Profile = ({ user }) => {
  const [showForm, setShowForm] = useState(false)

  const [profileInformation, setProfileInformation] = useStateWithLocalStorage(
    {
      name: user,
      information: 'Let your opponents get to know you better!',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
    },
    'storedProfile'
  )

  const handleEdit = (
    newName,
    newInformation,
    newImg = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
  ) => {
    setProfileInformation({
      name: newName,
      img: newImg,
      information: newInformation,
    })
  }

  return (
    <>
      {!showForm ? (
        <ProfileWrapper>
          <EditButton size={28} onClick={() => setShowForm(true)} />
          <AvatarWrapper>
            <img src={profileInformation.img} alt="user profile pic" />
            <h2>{user}</h2>
          </AvatarWrapper>
          <InfoWrapper>
            <h4>About me:</h4>
            <p>{profileInformation.information}</p>
          </InfoWrapper>
        </ProfileWrapper>
      ) : (
        <EditProfileForm
          handleEdit={handleEdit}
          profileInformation={profileInformation}
          setShowForm={setShowForm}
        />
      )}
    </>
  )
}

const ProfileWrapper = styled.section`
  min-height: 80vh;
  margin: 0 1rem;
  padding-top: 3rem;
  background-color: #4758d6;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  h2 {
    font-size: 1.5rem;
    margin: 0;
  }
  p {
    margin: 0;
  }
  border-radius: 0.25rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  align-items: center;
  position: relative;
`

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
  img {
    border-radius: 50%;
    height: 150px;
    width: auto;
  }
`
const InfoWrapper = styled.div`
  border: 1px black solid;
  background-color: black;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 0.25rem;
  width: 65vw;
  padding: 0 0.5rem 0.5rem 0.5rem;
  justify-content: center;
  h4 {
    margin: 0;
    text-align: center;
  }
  p {
    margin: 0;
    padding: 0 0.125rem;
  }
`

const EditButton = styled(MdEdit)`
  color: white;
  position: absolute;
  top: 1rem;
  right: 1rem;
`
export default Profile
