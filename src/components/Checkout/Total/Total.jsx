import { useContext } from 'react'
import { cartContext } from '../../../Contexts/Contexts';

function Total({ cartItems }) {
   const context = useContext(cartContext);
   const subTotal = cartItems.reduce((total, product) => {
      return total + product.price * context.productQuantity;
   }, 0);

   const totalDiscount = cartItems.reduce((total, product) => {
      if (product.discount !== 0) {
         return total + product.discount * context.productQuantity;
      }
      return 0
   }, 0);

   const totalPrice =
      Number(totalDiscount) !== 0
         ? (subTotal * (100 - totalDiscount)) / 100 + 4.99
         : subTotal + 4.99;

  return (
     <div className="cart-total">
        <h3 className="head">Cart total</h3>
        <div className="sub-total">
           <span>Subtotal</span>
           <span>
              {cartItems.length > 0 ? ` $ ${subTotal}` : `$ 00.0`}
           </span>
        </div>
        <div className="delivery">
           <span>Delivery</span>
           <span>{cartItems.length > 0 ? ` $ 4.99` : `$ 00.0`}</span>
        </div>
        <div className="discount">
           <span>Discount</span>
           <span>
              {cartItems.length > 0 ? ` % ${totalDiscount}` : `%0`}
           </span>
        </div>
        <hr />
        <div className="total">
           <span>TOTAL</span>
           <span className="total-price">
              {cartItems.length > 0 ? ` $ ${totalPrice.toFixed(2)}` : `$ 00.0`}
           </span>
        </div>
     </div>
  )
}

export default Total