import { Fragment, useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import './navigation.styles.scss'
const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <Fragment >
      <div className='navigation'>
        <NavLink className='logo-container' to="/">
          <CrwnLogo className='logo' />
        </NavLink>
        <div className="nav-links-container">
          <NavLink className='nav-link' to="/shop">
            Shop
          </NavLink>
          {currentUser
            ? <span onClick={signOutUser} className='nav-link'>Sign Out</span>
            : <NavLink className='nav-link' to="/auth">
              Sign In
            </NavLink>}

        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation