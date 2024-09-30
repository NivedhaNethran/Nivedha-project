import React from 'react'
import './Upload.css';


const Upload = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const form = e.target;
    const image=form.image.value;
    const title=form.title.value;
    const des=form.des.value;
    const price=form.price.value;
    const quantity=1;

    if(image ==="" || title ==="" || des === "" || price ===""){
      alert("Fill all the fields");
    }
    const prodObj = {image,title,des,price,quantity};
    console.log(prodObj);
    fetch("http://localhost:4050/product",{
      method:"POST",
      headers:{
       "Content-Type":"application/json",
      },
      body:JSON.stringify(prodObj)
    })
    .then((res)=>res.json())
    .then((data)=>{
      alert("Product Added Successfully")
      form.reset();
      window.location.href= "/admin";
    });
  }
  return (
    <>
    <div className='up1'>
      <h3>Upload Products</h3>
      <form onSubmit={handleSubmit}>
        <label value="image">Image</label><br/>
        <input type="text" name="image" id="image"/><br/>
        <label value="title">Title</label><br/>
        <input type="text" name="title" id="title"/><br/>
        <label value="des">Description</label><br/>
        <input type="text" name="des" id="des"/><br/>
        <label value="price">Price</label><br/>
        <input type="number" name="price" id="price"/><br/><br/>
        <button type="submit" className='btn btn-success'>Upload</button>
      </form>
    </div>


    {/* <section className="eve">
        <div className='load'><h2>Upload Products</h2></div>
<form>
    <label value="image">Image</label><br/>
    <input type="text" /> "<br/>
    <label value="title">Title</label><br/>
    <input type="text"/><br/>
    <label value="description">description</label><br/>
    <input type="text"/><br/>
    <label value="Price">Price</label><br/>
    <input type="text"/>
    </form><br/>
    <button type="submit" className='btn btn-success'>Upload</button>
</section> */}
    </>
  )
}

export default Upload
