import { Fragment, useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import CartIcon from '../cart-icon/cart-icon.component'
import { UserContext } from '../../context/user.context'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import './navigation.styles.scss'
import CardDropdown from '../cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../context/cart-context'
const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment >
      <div className='navigation'>
        <NavLink className='logo-container' to="/">
          <CrwnLogo className='logo' />
        </NavLink>
        <div className="nav-links-container">
          <NavLink className='nav-link' to="/">
            Home
          </NavLink>
          <NavLink className='nav-link' to="/shop">
            Shop
          </NavLink>
          {currentUser
            ? (<span onClick={signOutUser} className='nav-link'>Sign Out</span>)
            : (<NavLink className='nav-link' to="/auth">
              Sign In
            </NavLink>)}
          <CartIcon />
        </div>
        {isCartOpen && <CardDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation