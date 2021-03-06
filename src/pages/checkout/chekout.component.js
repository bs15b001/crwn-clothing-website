import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectcartitems,selectcartTotal} from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';
import CheckOutItem from '../../components/checkoutitem/checkoutitem.component';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
    ))}
    
      <div className='total'>TOTAL: ${total}</div>
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    cartItems: selectcartitems,
    total: selectcartTotal
  });
  
  export default connect(mapStateToProps)(CheckoutPage);