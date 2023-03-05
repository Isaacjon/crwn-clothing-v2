import Button from '../button/button.component'
import './cart-dropdown.styles.scss'

const CardDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items">
        <Button>Go to checkout</Button>
      </div>
    </div>
  )
}

export default CardDropdown