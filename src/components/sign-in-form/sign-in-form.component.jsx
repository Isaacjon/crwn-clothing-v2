import React, { useState } from 'react'
import { createUserDocumentFromAuth, signInUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'

const defaultFormFields = {
  email: "",
  password: "",
}

const SignInForm = ({ setRegisteredUser }) => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields


  const handleChange = e => {
    const { value, name } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) return alert('Fill out all the fields please!')

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password)

      setFormFields(defaultFormFields)
    } catch (error) {

      const errorCode = error.code;
      switch (errorCode) {
        case 'auth/user-not-found':
          alert('User does not exist!')
          break;
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break;

        default:
          console.log(error);
          break;
      }
    };
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup()
      setFormFields(defaultFormFields)

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    }
  }

  return (
    <div className="sign-in-container">
      <h2> Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" onChange={handleChange} value={email} name="email" type="email" required />
        <FormInput label="Password" onChange={handleChange} value={password} name="password" type="password" required />

        <div className='buttons-container'>
          <Button type="submit" >Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>Sign In With Google</Button>
        </div>
        <div style={{ paddingTop: '20px', textAlign: 'center' }}>
          <span onClick={e => setRegisteredUser(false)} style={{ fontWeight: "600", textDecoration: "underline", color: "#0F6292", cursor: "pointer" }}>Don't have an account? Register here</span>
        </div>
      </form>
    </div>
  )
}

export default SignInForm