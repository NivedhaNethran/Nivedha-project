import React from 'react'
import './Cakes.css';
import cake from '../images/cake.jpg'
import pict1 from '../images/pict1.png'
import pict2 from '../images/pict2.jpeg'
import pict3 from '../images/pict3.jpg'
import cake1 from '../images/cake1.webp'
import cake2 from '../images/cake2.webp'
import cake3 from '../images/cake3.webp'
import cake4 from '../images/cake4.webp'
import { useDispatch, useSelector } from 'react-redux';
import {  addToCart, deleteFromCart } from '../store/cartslice/Cartslice';
import Cproduct from '../products/Cproduct';

const Cakes = () => {
 const cartProducts=useSelector((state)=>state.cart.cartItems)
 const dispatch=useDispatch();
 
 const addCart=(item)=>{
  dispatch(addToCart(item))
 }
 const deleteCart=(item)=>{
  dispatch(deleteFromCart(item));
 }

  return (
<>
<section className='bcg1'>
<div className="bake"><h2>Bake Your Day Brighter</h2><p><h6>From brunch to birthdays and every 
        after-dinner dessert in between, explore the sweetest Hershey's  dessert recipes for your family to enjoy</h6></p></div>
        <form className="d-flex" role="search">
          <input className="form-control me-2 ind" type="search" placeholder="Search by receipe keyword,type or ingredient" aria-label="Search"/>
        </form>
  <div className="container key">
      <div className="row">
        <div className="col-lg-6">
          <div className="card as">
            <img src={cake} class="card-img-top" alt="..."/>
            <div className="card-body yy">Chocolate Peanut Butter milkshake
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={pict1} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">KIT KAT coffee chiller</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={pict2} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">REESEEs Ice cream Sandwiches with peanut butter candy crumbles</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={pict3} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Hersheys Chocolate Milkshake</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div className='container'>
      <div className='row'>
      {Cproduct.map((item)=>(
      <div className='col-lg-3'>
      <div className="card" key={item.id} >
      <img src={item.image} class="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-text">{item.title}</h5>
      <p className="card-text">{item.des}</p>
      <p className='card-text'>{item.price}</p>

    
    {cartProducts.find(items=>items.id === item.id)?
      <button className='btn btn-danger' onClick={()=>deleteCart(item)}>Remove From Cart </button>:
      <buttton className='btn btn-success' onClick={()=>addCart(item)}>Add to Cart</buttton>
}
      </div>
      </div>
   </div>
      ))}
  {/* <div className='col-lg-3'>
    <div className="card" >
    <img src={cake2} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Bluebery Cake</h5>
    <p className="card-text">Ideal for all occasions specially for fruit lovers,A bonanza for those who like fruits.</p>
    </div>
    </div>
  </div>
  <div className='col-lg-3'>
    <div className="card">
    <img src={cake3} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Red Forest Cake</h5>
    <p className="card-text">The Red Forest Cake is a decadent eggless celebration masterpiece.</p>
    </div>
    </div>         
  </div>
  <div className='col-lg-3'>
    <div className="card">
    <img src={cake4} className="card-img-top" alt="..."/>
    <divclassName="card-body">
    <h5 className="card-title">Rasamalai Cake</h5>
    <p className="card-text"> sweet and indulgent treat, the Rasmalai Cake is a luxurious fusion.</p>
    </div>
    </div>
  </div> */}
</div>
</div>
</section>
</>
  )
}

export default Cakes