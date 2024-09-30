import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const Edit = () => {
  const{id}=useParams();
  const[prodData,setProdData]=useState({
    image:"",
    title:"",
    des:"",
    price:"",
  });
  useEffect(()=>{
    fetch(`http://localhost:4050/product/${id}`)
    .then((res)=>res.json())
    .then((data)=>setProdData(data))
  });
  const handleUpdate =(e) =>{
    e.preventDefault();
    const form = e.target;
    const image =form.image.value;
    const title= form.title.value;
    const des = form.des.value;
    const price = form.price.value;

    const prodObj ={
        image,title,des,price};

    console.log(prodObj);
      fetch(`http://localhost:4050/product/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(prodObj),
      })
      .then((res)=>res.json())
      .then((data)=>{
        alert("Product Updated Successfully");
        window.location.href="/admin"
      });
    }
  
  return (
    <>
    <div className='up'>
      <div className='car'>
        <h3>Upload Products</h3>
        <form on onSubmit={handleUpdate}>
        <label value="image">Image</label><br/>
        <input type="text" name="image" id="image" defaultValue={prodData.image}/><br/>
        <label value="title">Title</label><br/>
        <input type="text" name="title" id="title"defaultValue={prodData.title}/><br/>
        <label value="des">Description</label><br/>
        <input type="text" name="des" id="des"defaultValue={prodData.des}/><br/>
        <label value="price">Price</label><br/>
        <input type="number" name="price" id="price"defaultValue={prodData.price}/><br/><br/>
        <button type="submit" className='btn btn-success'>Upload</button> 
        </form>
      </div>
    </div>
    </>
  )
}

export default Edit
{/* <section className="eve">
        <div className='load'><h2>Upload Products</h2></div>
<form>
    <label value="image">Image</label><br/>
    <input type="text"/><br/>
    <label value="title">Title</label><br/>
    <input type="text"/><br/>
    <label value="description">description</label><br/>
    <input type="text"/><br/>
    <label value="Price">Price</label><br/>
    <input type="text"/>
    </form><br/>
    <button type="submit" className='btn btn-success'>Upload</button>
</section> */}

