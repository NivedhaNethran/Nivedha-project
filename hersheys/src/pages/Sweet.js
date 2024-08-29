import React from 'react'
import './Sweet.css'; 
import sweet1 from '../images/sweet1.webp'
import sweet2 from '../images/sweet2.webp'
import sweet3 from '../images/sweet3.webp'
import sweet4 from '../images/sweet4.webp'
import sweet5 from '../images/sweet5.webp'
import sweet6 from '../images/sweet6.webp'
import Sweetp from '../products/Sweetp';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice';

const Sweet = () => {
    const cartProducts=useSelector((state)=>state.cart.cartItems)
    const dispatch=useDispatch();
    const addcart=(item)=>{
        dispatch(addToCart(item));
    }
    const deleteCart=(item)=>{
        dispatch(deleteFromCart(item));
    }
 
  return (
    <>  
       <section className="bcgk">
        <div className="container bat">
            <div className='row high'>
            {Sweetp.map((item)=>(
                <div className="col-lg-4 kite">
                <div className="card" key={item.id}>
                   <img src={item.image} className="card-img-top" alt="..."/>
                   <div className="card-body">
                   <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.price}</p>
                  {cartProducts.find(items=>items.id===item.id)?
                <button className='btn btn-primary' onClick={()=>deleteCart(item)}>Remove from Cart</button>:
                <button className='btn btn-success' onClick={()=>addcart(item)}>Add to Cart</button>  
                }
                </div>
                </div>
                </div>
            ))}
                {/* <div className="col-lg-4">
                <div class="card" >
                 <img src={sweet2} class="card-img-top" alt="..."/>
                 <div class="card-body">
                 <h5 class="card-title">Teji Sweet Combo</h5>
                </div>
                </div>
                </div>
                <div className="col-lg-4">
                <div class="card" >
                   <img src={sweet3} class="card-img-top" alt="..."/>
                   <div class="card-body">
                   <h5 class="card-title">Fusion Laddu Box</h5>
                </div>
                </div>
                </div> */}
            </div>
        </div>
    {/* <div className="container ball">
    <div className="row">
        <div className="col-lg-4">
        <div class="card" >
                <img src={sweet4} class="card-img-top" alt="..."/>
                 <div class="card-body">
                <h5 class="card-title">Shree Heera Sweets</h5>
        </div>
        </div>
        </div>
        <div className="col-lg-4">
        <div class="card">
             <img src={sweet5} class="card-img-top" alt="..."/>
             <div class="card-body">
             <h5 class="card-title">Combo Flavour Box</h5>
        </div>
        </div>
        </div>
        <div className="col-lg-4">
        <div class="card" >
                <img src={sweet6} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">SugarFree Laddu</h5>
            </div>
        </div>
        </div>
    </div>
    </div> */}
</section>
    </>
  )
}

export default Sweet