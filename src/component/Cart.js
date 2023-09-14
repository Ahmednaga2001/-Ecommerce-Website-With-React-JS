import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlus,FaMinus,FaTimes,FaTrashAlt } from "react-icons/fa";
import { addToCart, deleteFromCart, removeFromCart,clear } from '../rtk/slices/cartSlice';
import { Slide  } from "react-awesome-reveal";

function Cart() {
    
    const products = useSelector(state=>state.cart)
    console.log(products)
    const dispatch = useDispatch()
    const totalPrice = products.reduce((acc,product)=>acc+=product.price*product.quantity , 0)
    console.log(totalPrice)
  return (
   <>
  {/* <Slide right> */}
  <section className='cart-section'>
    <Container>
        <h2>Shopping Bag</h2>
        <hr/>
        <div className='d-flex justify-content-between'>
            <h5>Total : $ {totalPrice.toFixed(2)}</h5>
            <Button variant='danger' onClick={()=>dispatch(clear())}><FaTrashAlt/></Button>
        </div>
        <hr/>
        {
            products.map((product)=>(
                <div className='d-flex mb-2 '>
                    <div>
                    <img src={product.image} style={{width : "70px" , height : "70px", marginRight:"15px"}}/>

                    </div>
                   <div>
                   <h6 style={{width:"300px" }}>{product.title}</h6>
                   <br/>
                  
                   <Button size='sm' variant='danger'onClick={()=>dispatch(addToCart(product))} ><FaPlus/></Button>
                   <span className='m-2'>{product.quantity}</span>
                   <Button variant='light' onClick={()=>dispatch(deleteFromCart(product))} size='sm' style={{marginRight:"15px"}}><FaMinus/></Button>
                   <small>${product.price}</small>
                  
                   </div>
                   <div>
                    <Button size='sm' variant='light' onClick={()=>dispatch(removeFromCart(product))}><FaTimes/></Button>
                    <h6 style={{paddingTop:"40px"}}>{(product.quantity*product.price).toFixed(2)}</h6>
                   
                   </div>
                </div>
                
                
            ))
        }
    </Container>
   </section>
  {/* </Slide> */}
   </>
  )
}

export default Cart