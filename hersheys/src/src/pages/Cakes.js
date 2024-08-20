import React from 'react'
import './Cakes.css';
import cake from '../images/cake.jpg'
import pict1from '../images/pict1.png'
import 

const Cakes = () => {
  return (
<>
  <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="card as">
            <img src="images/cake.jpg" class="card-img-top" alt="..."/>
            <div className="card-body yy">Chocolate Peanut Butter milkshake
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src="images/pict1.png" class="img-fluid rounded-start" alt="..."/>
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
                <img src="images/pict2.jpeg" class="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">REESEEs Ice cream Sandwiches with peanut butter candy crumbles</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style="max-width: 540px;">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="images/pict3.jpg" class="img-fluid rounded-start" alt="..."/>
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
         
      
    </>
  )
}

export default Cakes