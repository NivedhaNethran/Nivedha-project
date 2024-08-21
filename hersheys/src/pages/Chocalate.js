import React from 'react'
import './Chocalate.css';
import card1 from '../images/card1.webp'
import card2 from '../images/card2.avif'
import card3 from '../images/card3.avif'
import card4 from '../images/card4.avif'
import york1 from '../images/york1.webp'
import york2 from '../images/york2.webp'
import york3 from '../images/york3.webp'
import york4 from '../images/york4.webp'
import Chproduct from '../products/Chproduct';




const Chocalate = () => {
  return (
    <>
    <section className='bgc1'>
<div className="container im">
<div className="row">
      {Chproduct.map((item)=>(
        <div className="col-lg-3 ab">
            <div className="card" key={item.id}>
                <img src={item.image} className="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">{item.title}</p>
                  <p className="card-text">{item.des}</p>
                  <p className="card-text">{item.price}</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
        </div>
        ))}
        {/* <div className="col-lg-3 ab1">
            <div className="card">
                <img src={york2} className="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">5th Avenue crunchy peanut in Chocalate candy bars </p> 
                </div>
              </div>   
        </div>
        <div className="col-lg-3 ab2">
            <div className="card">
                <img src={york3}className="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">5th Avenue crunchy peanut in Chocalate candy bars </p> 
                </div>
              </div>
        </div>
        <div className="col-lg-3 ab3">
            <div className="card">
                <img src={york4} className="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">Crunchy peanut in Chocalate K size candy bar</p> 
                </div>
              </div>
        </div> */}
    </div>
</div>
{/* <div className="container im">
<div className="rw">
        <div className="col-lg-3 ab">
            <div className="card">
                <img src={card1} className="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">HERSHEY'S Zero Sugar Chocalate candy bar</p>
                </div>
              </div>
        </div>
        <div className="col-lg-3 ab1">
            <div className="card">
                <img src={card2} className="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">5th Avenue crunchy peanut in Chocalate candy bars </p> 
                </div>
              </div>   
        </div>
        <div className="col-lg-3 ab2">
            <div className="card">
                <img src={card3}className="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">5th Avenue crunchy peanut in Chocalate candy bars </p> 
                </div>
              </div>
        </div>
        <div className="col-lg-3 ab3">
            <div className="card">
                <img src={card4} className="card-img-top" alt="..."/>
                <div className="card-body bd">
                  <p className="card-text">Crunchy peanut in Chocalate K size candy bar</p> 
                </div>
              </div>
        </div>
    </div>
</div> */}


</section>

    </>
  )
}

export default Chocalate