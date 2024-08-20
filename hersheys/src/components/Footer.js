import React from 'react'
import './Footer.css';
import Capture2 from '../images/Capture2.PNG'
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
<div className="cap"><img src={Capture2} alt=""/></div>
    <section className="blue">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hat"><h2>
              Let's Keep in Touch</h2><p>Unwrap recipe ideas, celebration inspiration and product news in your inbox!</p>
            </div>
          </div>
          <div className="col-lg-6">
          <div className="fl"><i class='bx bx-envelope'   ></i><p>Sign up for your newsletter</p></div>
          <div className="mb-3 mail">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container-fluid dj">
      <div className="row">
        <div className="col-lg-4 io">
        <FaFacebook />
        <AiFillTikTok />
        <FaInstagramSquare />
        <FaYoutube />
        <FaPinterest />
        <FaSquareTwitter />
          
      <div class="form-check form-switch off">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">High Contrast</label>
      </div>
        </div>
        <div className="col-lg-4 king">
          <ul>
            <p>Contact Customer Service</p>
            <p>The Hershey Company</p>
            <p>Visit Hershey</p>
          </ul> 
        </div>
        <div className="col-lg-4 kg">
          <ul>
            <p>Shop Hersshey Store</p>
            <p>Hershey career</p>
            <p>Hershey foodservice</p>
          </ul>  
        </div>
      </div>
    </div>
   
    <div className="footer">©2024 The Hershey Company. All Rights Reserved.
      <div className="list">
      <ul>
        <li><u>DO NOT SELL MY INFO</u></li>
        <li><u>Privacy Choices</u></li>
        <li><u>Notice to Parents</u></li>
        <li><u>Privacy policy</u></li>
        <li><u>Terms  & Condition</u></li>
        <li><u>Web Accessbility</u></li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default Footer