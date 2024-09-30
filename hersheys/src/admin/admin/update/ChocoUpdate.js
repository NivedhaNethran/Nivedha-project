import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ChocoUpdate = () => {
  const [productData1,setProductData1] =useState([]);
  
  useEffect(()=>{
   fetch(`http://localhost:4050/allproducts`)
   .then((res)=>res.json())
   .then((data)=>setProductData1(data));
    },[]);
    const deleteProduct =(id)=>{
      fetch(`http://localhost:4050/product/${id}`,{
        method:"DELETE"
      })
    .then((res)=>res.json())
    .then((data)=>{
      alert("Product Deleted Succesfully");
      setProductData1((prevProductData1)=>
      prevProductData1.filter((item)=>item._id!==id))
    })
    }


  return (
    <section>
       <Link to='/upload' className='btn btn-primary xyz'>Add on</Link>
         <h3>Updated Products</h3>
    {productData1.map((item)=>(
    <div class="card mb-3" key={item._id}>
    <div class="row g-0">
    <div class="col-md-4">
      <img src={item.image}class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">{item.des}</p>
        <p class="card-text">Rs:{item.price}</p>
        <Link to={`/edit/${item._id}`} className='btn btn-warning'>Edit</Link> 
       <button className='btn btn-danger'onClick={()=>{deleteProduct(item._id)}}>Delete</button>
      </div>
    </div>
  </div>
</div>
))}
    </section>
  )
}

export default ChocoUpdate