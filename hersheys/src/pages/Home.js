import React from 'react'
import './Home.css';
import hersheypic from '../images/hersheypic.png'
import caramel from '../images/caramel.jpg'
import k1 from '../images/k1.jpeg'
import k2 from '../images/k2.jpeg'
import k3 from '../images/k3.jpeg'


const Home = () => {
  return (
    <>
    <section className='bcg'>
    <div className="pic"><img src={hersheypic}alt=""/></div>

<div className=" sen">Make More Moment of Goodness</div>
<div className ="sen1"> Welcome elcome to Hersheyland, your go-to dessert destination for tasty recipes, 
  celebration ideas and family activities. Find a special treat to bake with your kiddos. 
  Plan an awesome party. Re-discover your favorite Hershey brands. 
  Hersheyland is full of ways to make life a little sweeter!</div>

<div className="sweet">Sweeten Your Everyday Moments</div>
    <section class="pot">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 qq">
          <div className="card gh">
            <h3>S'mores more anytime</h3>
            <p>you dont need a campfire for baking S'mores inspired desert or making S'mores.</p>
          </div>
        </div>
        <div className="col-lg-4 aa">
          <div className="card jk">
          <h3>Host a birthdaay Bash</h3>
            <p>we have got cake recepies for sure,but you can also find  inspo for invites & activites.</p>
          </div>
        </div>
        <div className="col-lg-4 zz">
          <div className="card kl">
          <h3>Sweet Streaming</h3>
            <p>Cuddle up for a movie or Tv show marathon complete with sweet and salty.</p>
          </div>
      </div>
      </div>
    </div>
    </section>
    <div class="container-fluid tot">
        <div class="row">
          <div class="col-lg-6 cml"><img src={caramel}alt=""/></div>
                  <div class="col-lg-6 para"><h1>Caramel's Biggest Moment Yet</h1><h5>We didn't know it was possible to make perfection more perfect until 
                    we made REESE'S Peanut Butter Caramel Big Cups.Get ready to taste the decadent trip of chocolate, peanut butter and caramel, 
                    all in one bite.</h5>
                  <button class="box">Experience Awesommeness</button>
                  </div>
      </div>
    </div>
    <div class="ssent">Still Scrolling? Try One of These!</div>  
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <img src={k1} alt=""/>
          <p class="pic"><u>GET BAKING TIPS AND TRICKS</u></p>
        </div>
        <div class="col-lg-4">
          <img src={k2} alt=""/>
          <p class="pic"><u>SEE ACTIVITES,GIFTS AND MORE</u></p>
        </div>
        <div class="col-lg-4">
          <img src={k3} alt=""/>
          <p class="pic"><u>ABOUT</u></p>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Home