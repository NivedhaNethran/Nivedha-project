import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Editg = () => {
        const{id}=useParams();
      const[proData5,setProductData5]=useState({
        image:"",
        title:"",
        des:"",
        price:"",
      });
      
      useEffect(()=>{
        fetch(`http://localhost:4050/gproduct/${id}`)
        .then((res)=>res.json())
        .then((data)=>setProductData5(data))
      });
      const handleUpdate =(e) =>{
        e.preventDefault();
        const form = e.target;
        const image =form.image.value;
        const title= form.title.value;
        const des = form.des.value;
        const price = form.price.value;
    
        const prodObj1 ={
            image,title,des,price};
    
        console.log(prodObj1);
          fetch(`http://localhost:4050/gproduct/${id}`,{
            method:"PATCH",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify(prodObj1),
          })
          .then((res)=>res.json())
          .then((data)=>{
            alert("Product Updated Successfully");
            window.location.href="/giftupdate"
          });
        }
    

  return (
    <>
        <div className='up'>
      <div className='car'>
        <h3>Upload Products</h3>
        <form on onSubmit={handleUpdate}>
        <label value="image">Image</label><br/>
        <input type="text" name="image" id="image" defaultValue={proData5.image}/><br/>
        <label value="title">Title</label><br/>
        <input type="text" name="title" id="title"defaultValue={proData5.title}/><br/>
        <label value="des">Description</label><br/>
        <input type="text" name="des" id="des"defaultValue={proData5.des}/><br/>
        <label value="price">Price</label><br/>
        <input type="number" name="price" id="price"defaultValue={proData5.price}/><br/><br/>
        <button type="submit" className='btn btn-success'>Upload</button> 
        </form>
      </div>
    </div>


    </>
  )
}


export default Editg