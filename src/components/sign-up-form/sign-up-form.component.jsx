import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUpForm = ({ setRegisteredUser }) => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) return alert('passwords do not match')

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)

      const userDocRef = await createUserDocumentFromAuth({ ...user, displayName })

      setFormFields(defaultFormFields)

      return userDocRef

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        return alert('Can not create user, email already exists!')
      } else {
        console.log('Error while creating user! ', { error });
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up here</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" value={displayName} onChange={handleChange} name="displayName" type="text" required />

        <FormInput label="Email" value={email} onChange={handleChange} name="email" type="email" required />

        <FormInput label="Password" minLength="6" value={password} onChange={handleChange} name="password" type="password" required />

        <FormInput label="Confirm Password" minLength="6" value={confirmPassword} onChange={handleChange} name="confirmPassword" type="password" required />

        <div className="flex items-center gap-25 justify-between">
          <Button buttonType="" >Sign Up</Button>
          <span onClick={e => setRegisteredUser(true)} style={{ fontWeight: "600", textDecoration: "underline", color: "#0F6292", cursor: "pointer" }}>Already have an account ?</span>
        </div>

      </form>
    </div>
  )
}

export default SignUpForm