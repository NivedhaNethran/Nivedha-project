import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Cakes from './pages/Cakes';
import Chocalate from './pages/Chocalate';
import Gifts from './pages/Gifts';


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
     
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
