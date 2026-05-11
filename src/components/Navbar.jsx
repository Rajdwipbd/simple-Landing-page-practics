import React from 'react'

const Navbar = () => {
  return (
    <>
        <section className='flex items-center justify-between p-4 bg-gray-800 text-white'>
            <div>RAJDWIP ELECTRONICS</div>
            <div>
                <a href="#" className='mx-2 hover:underline'>Home</a>
                <a href="#" className='mx-2 hover:underline'>Products</a>
                <a href="#" className='mx-2 hover:underline'>Contact Us</a>  
            </div>
        </section>
    </>
  )
}

export default Navbar