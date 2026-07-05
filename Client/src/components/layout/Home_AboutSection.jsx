import React from 'react'

const Home_AboutSection = () => {
  return (
    <div className='w-full h-[90vh]  flex flex-row justify-center items-center'>
        <div className='w-[40%] h-full flex flex-col justify-center items-center '>
               <div className='w-[70%] h-[80%] flex flex-col justify-center items-center bg-green-400 rounded-[10px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] '>
                  <div className='w-full h-full flex flex-col justify-center items-center bg-red-600 rounded-[10px] shadow-lg p-4 rotate-[-5deg] z-[1]'>

                  </div>
               </div>
        </div>
        <div className='w-[60%] h-full flex flex-col justify-center items-center text-center p-8'>
            <h1 className='text-4xl font-bold text-red-600'>About Us</h1>
            <p className='text-lg text-black mt-4'>Welcome to Pet Paradise, your trusted destination for finding healthy, friendly, and lovable pets. We offer a wide variety of pets including dogs, cats, birds, fish, rabbits, and other small animals, all raised with proper care and attention. Our mission is to help every customer find the perfect companion while promoting responsible pet ownership. Along with pets, we provide quality accessories, nutritious food, and essential care products to keep your companions happy and healthy. At Pet Paradise, customer satisfaction and animal welfare are our highest priorities, making us a reliable choice for every pet lover.</p>
        </div>
    </div>
  )
}

export default Home_AboutSection