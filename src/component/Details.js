import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../rtk/slices/cartSlice'

function Details() {
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(id)
    const products = useSelector(state=>state.products)
 
    const product = products.find((product)=> product.id ==id)
    console.log(product)
    
  
  return (
    <>
  
    <section className='details-section'>
        <div className='container'>
            <div className='row pt-5'>
                <div className="col-md-5 mx-auto mb-1">
                    <img className='w-50 h-75 ' src={product.image}/>
                </div>
                <div className="col-md-7 mx-auto mb-1">
                    <h2>{product.title}</h2>
                    <strong className='text-danger'>${product.price}</strong>
                    <p>{product.description}</p>
                    <Button variant='dark' className='p-2' onClick={()=> dispatch(addToCart(product))}>Add to cart</Button>
                </div>

            </div>

        </div>

    </section>
    </>
  )
}

export default Details