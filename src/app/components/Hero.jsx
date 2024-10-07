import React from 'react'

const Hero = () => {
  return (
    <section className='container my-16'>
      <h1 className="text-4xl font-extrabold font-bold text-center">
        FIND YOU NEXT <br />DREAM JOB
      </h1>
      {/* <p className='text-centre text-gray-600 mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rem, ab molestias numquam omnis ducimus quidem libero! Ad distinctio obcaecati nesciunt? Deserunt ipsum quod ipsa exercitationem suscipit nam nobis aliquam!
        </p> */}
        <form className='flex gap-2 mt-4 max-w-md mx-auto'>
          <input 
          type="search"
          className='border border-gray-400 w-full py-2 px-3 rounded-md'
          placeholder='Search Here'
          />
          <button className='bg-red-700 text-white py-2 px-4 rounded-md'>Search</button>
        </form>
    </section>
  )
}

export default Hero
