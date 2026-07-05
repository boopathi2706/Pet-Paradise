import React from 'react'

const Home_HeroSection = () => {
  return (
    <div className='w-full h-[110vh]  flex flex-col justify-between items-center bg-gradient-to-br from-zinc-900 via-neutral-800 to-black'>
       <div className='flex flex-col items-center justify-end h-[35%] text-center  pb-10 gap-4'>
           <h1 className='text-5xl font-bold text-orange-500 align-center'>Find Your Perfect Pet Companion at Pet Paradise</h1>
           <p className='text-gray-700 text-[17px] w-[70%]'>Discover healthy, happy, and well-cared-for pets including dogs, cats, birds, fish, rabbits, and more. At Pet Paradise, we connect loving families with their perfect companions while providing quality pet supplies and exceptional customer service.</p>
       </div>
       <div className="w-full h-[65%]  bg-[url('hero_section.png')] bg-cover bg-center bg-no-repeat">
           
       </div>
     </div>
  )
}

export default Home_HeroSection