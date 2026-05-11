import React from 'react'

const Products = ({ product }) => {
  return (
    <>
    <div className='border-2 p-2 border-gray-300 rounded-2xl sm:text-center sm:m-5' key={product.id} >
                    <h1 className='font-bold m-2'>{product.name}</h1>
                    <p className='font-light'>{product.category}</p>
                    <p>{product.description}</p>
                    <p className='text-green-600 font-bold'>${product.price}</p>
                    <button className= 'bg-blue-500 my-2 text-white  px-2 rounded hover:bg-blue-600'>Add to Cart</button>

                </div>
    </>
  )
}

export default Products 