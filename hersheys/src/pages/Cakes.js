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
    </section>
        </>
  )
}

export default Cakes