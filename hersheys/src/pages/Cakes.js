import React from 'react'
import './Cakes.css';
import cake from '../images/cake.jpg'
import pict1 from '../images/pict1.png'
import pict2 from '../images/pict2.jpeg'
import pict3 from '../images/pict3.jpg'


const Cakes = () => {
  return (
<>
<section className='bcg1'>
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
    </section>
        </>
  )
}

export default Cakes