import React from 'react'

const Home_PetDetailsSection = () => {
  return (
    <div className='w-full h-[90vh] bg-yellow-600 flex flex-col items-center justify-center'>
        <div className='w-full h-[10%] flex flex-row items-center justify-between pl-10'>
            <h1 className='text-[30px] font-bold text-white'>Pet Details</h1>
            <a href="" className='ml-4 text-white hover:text-yellow-300 pr-4'>Other Pets</a>
        </div>
        <div className=' w-full h-[90%] flex flex-row items-center justify-evenly'>
            <div className='w-[22%] h-[90%] bg-white m-2 rounded-[10px] shadow-lg'>
                <div className='w-full h-full bg-red-300  rounded-[10px] shadow-lg rotate-3 transition-transform duration-300 ease-in-out cursor-pointer'>
                   <h1>DOG</h1>
                 </div>
            </div>
            <div className='w-[22%] h-[90%] bg-white m-2 rounded-[10px] shadow-lg'>
                 <div className='w-full h-full bg-red-300  rounded-[10px] shadow-lg rotate-3 transition-transform duration-300 ease-in-out cursor-pointer'>
                   <h1>CAT</h1>
                 </div>
            </div>
            <div className='w-[22%] h-[90%] bg-white m-2 rounded-[10px] shadow-lg'>
                 <div className='w-full h-full bg-red-300  rounded-[10px] shadow-lg rotate-3 transition-transform duration-300 ease-in-out cursor-pointer'>
                 <h1>BIRD</h1>
                 </div>
            </div>
            <div className='w-[22%] h-[90%] bg-white m-2 rounded-[10px] shadow-lg'>
                 <div className='w-full h-full bg-red-300  rounded-[10px] shadow-lg rotate-3 transition-transform duration-300 ease-in-out cursor-pointer'>
                    <h1>FISH</h1>  
                 </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home_PetDetailsSection