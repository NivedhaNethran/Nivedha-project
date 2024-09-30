import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Edits = () => {

    const{id}=useParams();
  const[prodData4,setProductData4]=useState({
    image:"",
    title:"",
    des:"",
    price:"",
  });
  useEffect(()=>{
    fetch(`http://localhost:4050/sproduct/${id}`)
    .then((res)=>res.json())
    .then((data)=>setProductData4(data))
  });
  const handleUpdate =(e) =>{
    e.preventDefault();
    const form = e.target;
    const image =form.image.value;
    const title= form.title.value;
    const des = form.des.value;
    const price = form.price.value;

    const prodObj4 ={
        image,title,des,price};

    console.log(prodObj4);
      fetch(`http://localhost:4050/sproduct/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(prodObj4),
      })
      .then((res)=>res.json())
      .then((data)=>{
        alert("Product Updated Successfully");
        window.location.href="/sweetupdate"
      });
    }
  
  return (
    <div>
<div className='up'>
      <div className='car'>
        <h3>Upload Products</h3>
        <form on onSubmit={handleUpdate}>
        <label value="image">Image</label><br/>
        <input type="text" name="image" id="image" defaultValue={prodData4.image}/><br/>
        <label value="title">Title</label><br/>
        <input type="text" name="title" id="title"defaultValue={prodData4.title}/><br/>
        <label value="des">Description</label><br/>
        <input type="text" name="des" id="des"defaultValue={prodData4.des}/><br/>
        <label value="price">Price</label><br/>
        <input type="number" name="price" id="price"defaultValue={prodData4.price}/><br/><br/>
        <button type="submit" className='btn btn-success'>Upload</button> 
        </form>
      </div>
    </div>

    </div>
  )
}

export default Edits