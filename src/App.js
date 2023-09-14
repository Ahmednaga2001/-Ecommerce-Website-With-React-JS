
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './component/Header';
import ProductCard from './component/ProductCard';
import { useEffect } from 'react';
import { fetchProducts } from './rtk/slices/productSlice';
import { Route, Routes } from 'react-router-dom';
import Details from './component/Details';
import Home from './component/Home';
import Cart from './component/Cart';
import Footer from './component/Footer';


function App() {
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(fetchProducts())
})

  return (
    <div>
   <Header/>
   <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/product/:id' element = {<Details/>}/>
  
   </Routes>
   <Footer/>
  
    </div>
  );
}

export default App;
