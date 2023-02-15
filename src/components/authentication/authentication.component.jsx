// import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import SignUpForm from "../sign-up-form/sign-up-form.component"
import SignInForm from "../sign-in-form/sign-in-form.component"
import './authentication.style.scss'
import { useState } from "react"

const Authentication = () => {

  const [registeredUser, setRegisteredUser] = useState(false)

  return (
    <div className="authentication-container">
      <h3> Sign {registeredUser ? 'In' : 'Up'} Page </h3>
      {registeredUser ? <SignInForm setRegisteredUser={setRegisteredUser} /> : <SignUpForm setRegisteredUser={setRegisteredUser} />}

    </div>
  )
}

export default Authentication