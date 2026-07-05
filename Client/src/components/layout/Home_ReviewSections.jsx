import React from 'react'

const Home_ReviewSections = () => {
  return (
    
    <div className='w-full h-[60vh] bg-red-600'>
        {/* Section Header */}
       <div className='w-full h-[15%] flex flex-row items-center justify-between pl-10 bg-yellow-600'>
          <h1 className='text-[20px] font-bold text-white text-start'>Reviews</h1>
       </div>
       <div className='w-full h-[70%] flex flex-row items-center justify-evenly bg-green-600'>
        {/* Review Cards */}

            <div className='w-[30%] h-[80%] bg-white rounded-[10px] shadow-lg flex flex-col items-center justify-evenly relative'>
                <div className='w-[60px] h-[60px] bg-gray-500 rounded-[100%] shadow-lg absolute top-[5px] left-[85%] border-[5px] border-white'>

                </div>
                <div className='w-[90%] h-[80%] bg-red-300 rounded-[10px] shadow-lg flex flex-col items-start justify-evenly'>
                    <div className='w-[60%] h-[30%] bg-green-300 rounded-[50px] shadow-lg'>
                    </div>
                    <div className='w-[90%] h-[60%] bg-white  border-l-[5px] border-l-green-300'>
                    </div>
                </div>
             </div>

              <div className='w-[30%] h-[80%] bg-white rounded-[10px] shadow-lg flex flex-col items-center justify-evenly relative'>
                <div className='w-[60px] h-[60px] bg-gray-500 rounded-[100%] shadow-lg absolute top-[5px] left-[85%] border-[5px] border-white'>

                </div>
                <div className='w-[90%] h-[80%] bg-red-300 rounded-[10px] shadow-lg flex flex-col items-start justify-evenly'>
                    <div className='w-[60%] h-[30%] bg-green-300 rounded-[50px] shadow-lg'>
                    </div>
                    <div className='w-[90%] h-[60%] bg-white  border-l-[5px] border-l-green-300'>
                    </div>
                </div>
             </div>


              <div className='w-[30%] h-[80%] bg-white rounded-[10px] shadow-lg flex flex-col items-center justify-evenly relative'>
                <div className='w-[60px] h-[60px] bg-gray-500 rounded-[100%] shadow-lg absolute top-[5px] left-[85%] border-[5px] border-white'>

                </div>
                <div className='w-[90%] h-[80%] bg-red-300 rounded-[10px] shadow-lg flex flex-col items-start justify-evenly'>
                    <div className='w-[60%] h-[30%] bg-green-300 rounded-[50px] shadow-lg'>
                    </div>
                    <div className='w-[90%] h-[60%] bg-white  border-l-[5px] border-l-green-300'>
                    </div>
                </div>
             </div>
       </div>
       {/* Navigation Dots */}
       <div className='w-full h-[15%] flex flex-row items-center justify-center gap-2 bg-gray-600'>
        <div className='w-[13px] h-[13px] bg-black rounded-[100%]'></div>
        <div className='w-[10px] h-[10px] bg-gray-400 rounded-[100%]'></div>
        <div className='w-[10px] h-[10px] bg-gray-400 rounded-[100%]'></div>
        <div className='w-[10px] h-[10px] bg-gray-400 rounded-[100%]'></div>
        <div className='w-[10px] h-[10px] bg-gray-400 rounded-[100%]'></div>
       </div>

        
    </div>
  )
}

export default Home_ReviewSections