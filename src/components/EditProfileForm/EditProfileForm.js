import styled from 'styled-components/macro'

const EditProfileForm = ({ handleEdit, profileInformation, setShowForm }) => {
  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const { name, info } = form.elements
    handleEdit(name.value, info.value)
    form.reset()
    setShowForm(false)
  }

  return (
    <ProfileFormWrapper>
      <ProfileForm onSubmit={handleSubmit}>
        <label htmlFor="name" aria-label="name-input">
          Name:
        </label>
        <input
          type="text"
          id="name"
          defaultValue={profileInformation.name}
        ></input>
        <label htmlFor="info" aria-label="info-iput">
          About you:
        </label>
        <textarea
          type="text"
          id="info"
          rows="5"
          defaultValue={profileInformation.information}
        ></textarea>
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
  gap: 0.75rem;
  width: 60vw;
  padding: 5vh 5vw;
  label {
    font-size: 1.5rem;
  }
  input,
  textarea {
    border-radius: 0.25rem;
    font-size: 1rem;
    font-family: 'Oswald Medium';
  }
  button {
    margin: 0 auto;
    border-radius: 0.25rem;
    font-family: 'Oswald Medium';
    width: 10rem;
  }
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
