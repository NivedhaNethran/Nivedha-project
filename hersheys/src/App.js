import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom'
import Home from './pages/Home';
import Cakes from './pages/Cakes';
import Chocalate from './pages/Chocalate';
import Gifts from './pages/Gifts';
import Cart from './pages/Cart';
import Sweet from './pages/Sweet';
import Admin from './admin/Admin';
import Upload from './admin/Upload';
import Edit from './admin/Edit';







function App() {
  return (
    <div >
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/cakes' element={<Cakes/>}/>
      <Route path='/chocalates' element={<Chocalate/>}/>
      <Route path='/gifts' element={<Gifts/>}/>
      <Route path='/sweet' element={<Sweet/>}/> 
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/edit/:id' element={<Edit/>} loader={({params})=>fetch(`http://localhost:4050/product/${params.id}`)}/>
      
     

     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
