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


const Chocalate = () => {
  return (
    <>
    <section className='bgc1'>
<div class="container im">
<div class="rw">
        <div class="col-lg-3 ab">
            <div class="card">
                <img src={card1} class="card-img-top" alt="..."/>
                <div class="card-body bd">
                  <p class="card-text">HERSHEY'S Zero Sugar Chocalate candy bar</p>
                </div>
              </div>
        </div>
        <div class="col-lg-3 ab1">
            <div class="card">
                <img src={card2} class="card-img-top" alt="..."/>
                <div class="card-body bd">
                  <p class="card-text">5th Avenue crunchy peanut in Chocalate candy bars </p> 
                </div>
              </div>   
        </div>
        <div class="col-lg-3 ab2">
            <div class="card">
                <img src={card3}class="card-img-top" alt="..."/>
                <div class="card-body bd">
                  <p class="card-text">5th Avenue crunchy peanut in Chocalate candy bars </p> 
                </div>
              </div>
        </div>
        <div class="col-lg-3 ab3">
            <div class="card">
                <img src={card4} class="card-img-top" alt="..."/>
                <div class="card-body bd">
                  <p class="card-text">Crunchy peanut in Chocalate K size candy bar</p> 
                </div>
              </div>
        </div>
    </div>
</div>

<div class="container is">
        <div class="rw">
        <div class="col-lg-3 gh">
            <div class="card" >
            <img src={york1} class="card-img-top" alt="..."/>
            <div class="card-body bd">
              <p class="card-text">As you are sweeter than the chocolates</p>
            </div>
            </div>
        </div>
        <div class="col-lg-3 gh1">
            <div class="card" >
            <img src={york2} class="card-img-top" alt="..."/>
            <div class="card-body bd">
              <p class="card-text">When things turned rough all you need is a chocolate. </p> 
            </div>
            </div>   
        </div>
        <div class="col-lg-3 gh2">
            <div class="card" >
            <img src={york3} class="card-img-top" alt="..."/>
            <div class="card-body bd">
              <p class="card-text">Every choco like phases in life,Some are crunchy, soft,</p> 
            </div>
            </div>
        </div>
    <div class="col-lg-3 gh3">
            <div class="card" >
            <img src={york4} class="card-img-top" alt="..."/>
            <div class="card-body bd">
              <p class="card-text">A day without a chocolate is a day without sunshine.</p> 
            </div>
          </div>
    </div>
</div>
</div>
</section>

    </>
  )
}

export default Chocalate