import React from 'react'
import img from "../img/woman_hero.png"
import ProductCard from './ProductCard'

function Home() {
  return (
    <>
    <section className='hero '>
        <div className='container'>
            <div className='row'>
                <div className='content col-md-8'>
                    <hr style={{width:"100px"}}/>  <span>New Trend</span>
                  
                    <h1>AUTUMN SALE STYLISH <br/><span className='semibold'> WOMENN</span></h1>
                </div>
                <div className='col-md-4' style={{paddingTop:"100px"}}>
                    <img src={img} style={{height:"550px"}}/>
                </div>

            </div>

        </div>

    </section>
    <ProductCard/>
    </>
  )
}

export default Home