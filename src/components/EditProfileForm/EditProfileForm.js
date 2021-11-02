import { useState } from 'react'
import styled from 'styled-components/macro'

const EditProfileForm = ({ handleEdit, profileInformation, setShowForm }) => {
  const [profilePicture, setProfilePicture] = useState('')

  function getProfilePreview(previewEvent) {
    const image = previewEvent.target.files[0]
    const reader = new FileReader()
    reader.onload = event => {
      setProfilePicture(event.target.result)
    }
    reader.readAsDataURL(image)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const { name, info } = form.elements
    handleEdit(name.value, info.value, profilePicture)
    form.reset()
    setShowForm(false)
  }

  return (
    <ProfileFormWrapper>
      <ProfileForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" defaultValue={profileInformation.name} />
        <label htmlFor="avatar">Profile picture</label>
        <CustomFileInput>
          <input
            type="file"
            id="avatar"
            accept=".png, .jpeg, .jpg"
            onChange={event => {
              getProfilePreview(event)
            }}
          />
          Upload File
        </CustomFileInput>
        <label htmlFor="info">About you:</label>
        <textarea
          type="text"
          id="info"
          rows="5"
          maxLength="200"
          defaultValue={profileInformation.information}
        />
        <button>Save your changes</button>
      </ProfileForm>
      <CancelButton onClick={() => setShowForm(false)}>Cancel</CancelButton>
    </ProfileFormWrapper>
  )
}

const ProfileFormWrapper = styled.div`
  height: 80vh;
  background: white;
  color: black;
  font-family: 'Oswald Medium';
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
`

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 60vw;
  padding: 5vh 5vw;
  label {
    font-size: 1.25rem;
  }
  input,
  textarea {
    border-radius: 0.25rem;
    font-size: 1rem;
    font-family: 'Oswald Medium';
  }
  input[type='file'] {
    display: none;
  }
  button {
    margin: 0 auto;
    border-radius: 0.25rem;
    font-family: 'Oswald Medium';
    width: 10rem;
  }
`

const CustomFileInput = styled.label`
  border: 1px solid #ccc;
  display: inline-block;
  background-color: #efefef;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 0.25rem;
  font-size: 18px;
`

const CancelButton = styled.button`
  background-color: #e71d1d;
  margin-bottom: 5vh;
  color: white;
  width: 10rem;
  border-radius: 0.25rem;
  font-family: 'Oswald Medium';
`
export default EditProfileForm
