import React from 'react'


const Edit = () => {
  return (
    <>
<section className="eve">
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
</section>

    </>
  )
}

export default Edit