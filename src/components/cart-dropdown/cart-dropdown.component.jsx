import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'

const CardDropdown = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items">
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      {/* <div style={{ padding: '20px', width: '100%' ,border:'1px solid'}}> */}
      <Button style={{ margin: '0 20px 20px' }}>Go to checkout</Button>
      {/* </div> */}
    </div>
  )
}

export default CardDropdown