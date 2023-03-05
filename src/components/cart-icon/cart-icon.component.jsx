import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart-context'
import { useContext } from 'react'

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(prev => !prev)
  return (
    <div onClick={toggleIsCartOpen} className='cart-icon-container'><ShoppingIcon className='shopping-icon' /><span className='item-count'>{cartCount}</span></div>
  )
}

export default CartIcon