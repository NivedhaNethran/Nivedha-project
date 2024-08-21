import React from 'react'
import './Gifts.css';
import q1 from "../images/q1.webp"
import q2 from "../images/q2.webp"
import q3 from "../images/q3.avif"
import q4 from "../images/q4.webp"
import cho1 from "../images/cho1.webp"
import cho2 from "../images/cho2.webp"
import cho3 from "../images/cho3.avif"
import cho4 from "../images/cho4.webp"
import Giftp from '../products/Giftp';

const Gifts = () => {
  return (
    <>
<section className='bgc'>
<div className="container in">
    <div className="row">
      {Giftp.map((item)=>(
        <div className="col-lg-3 cd">
            <div className="card" key={item.id}>
                <img src={item.image}class="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">{item.title}</p>
                  <p className="card-text">{item.des}</p>
                  <p className="card-text">{item.price}</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
        </div>
        ))}
        {/* <div className="col-lg-3 cd1">
            <div className="card">
                <img src={q2}class="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">'Tis the gift to come down where we ought to be</p> 
                </div>
              </div>   
        </div>
        <div className="col-lg-3 cd2">
            <div className="card">
                <img src={q3} class="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">Gift cards: Almost as magical as flying reindeer.</p> 
                </div>
              </div>
        </div>
        <div className="col-lg-3 cd3">
            <div className="card">
                <img src={q4} class="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">Santa needed help saving space in his sack.</p> 
                </div>
              </div>
        </div>
     */}
     </div>
</div>
{/* <div className="container it">
    <div className="rw">
        <div className="col-lg-3 ef">
            <div className="card" >
                <img src={cho1} class="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">Ultimate Assortment with festival Band</p>
                </div>
              </div>
        </div>
        <div className="col-lg-3 ef1">
            <div className="card" >
                <img src={cho2}class="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">Get one of those “Home Sweet Home” plaques.</p> 
                </div>
              </div>   
        </div>
        <div className="col-lg-3 ef2">
            <div className="card" >
                <img src={cho3} class="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">Much Assortment of thinking with your Band </p> 
                </div>
              </div>
        </div>
        <div className="col-lg-3 ef3">
            <div className="card" >
                <img src={cho4} class="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">Just a little something to say I’m thinking of you.</p> 
                </div>
              </div>
        </div>
    </div>
</div> */}
</section>

    </>
  )
}
export default Gifts