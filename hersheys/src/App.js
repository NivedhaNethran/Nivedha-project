import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Cakes from './pages/Cakes';
import Chocalate from './pages/Chocalate';
import Gifts from './pages/Gifts';
import Cart from './pages/Cart';


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
      <Route path='/cart' element={<Cart/>}/>

     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
