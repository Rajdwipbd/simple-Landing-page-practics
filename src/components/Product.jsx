import React from 'react'
import Products from './Products'

const Product = ({ products }) => {
  return (
    <>
    <h2 className='text-center my-7 font-bold text-2xl'>My Products</h2>
    <div className='md:grid md:grid-cols-3 gap-4 p-4 m-5 border-2 rounded-lg '>
        {products.map(product=> <Products key={product.id} product={product} />)}
    </div>
        
    
    </>
  )
}

export default Product