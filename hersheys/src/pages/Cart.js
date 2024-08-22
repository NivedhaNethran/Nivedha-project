import React from 'react'
import choc from '../images/choc.jfif'
import './Cart.css'
import { deleteFromCart } from '../store/cartslice/Cartslice'
import { useDispatch, useSelector } from 'react-redux'


const Cart = () => {
    const cartProducts=useSelector((state)=>state.cart.cartItems);
    const dispatch=useDispatch();

    const deleteCart=(item)=>{
        dispatch(deleteFromCart(item));
    };

  return (
    <>
    <div className='hod'>
        {cartProducts.map((item)=>(
 <div className="card mb-3" key={item.id}>
  <div className="row g-0">
        <div className="col-md-4">
      <img src={item.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.des}</p>
        <p className="card-text">{item.price}</p>
        <button className='btn btn-primary ml-5' onClick={()=>deleteCart(item)}>Delete</button>

      </div>
    </div>
  </div>
</div>
))}
</div>
    </>
  )
}

export default Cart
