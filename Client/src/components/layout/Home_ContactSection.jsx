import React from 'react'

const Home_ContactSection = () => {
  return (
    
    <div className='w-full h-[50vh] bg-blue-600 flex flex-row items-center justify-evenly'>

       <div className='w-[35%] h-[70%] bg-white rounded-[10px] shadow-lg flex flex-col items-start justify-center gap-2'>
           <img src='logo_one_light_theme.png' alt='Contact Us' className='w-[50%] h-[40%] rounded-[10px] ' />
           <p className='text-[15px] font-bold text-black text-start pl-4'>Contact Us</p>
            <p className='text-[12px] w-[60%] text-gray-600 text-start pl-4'>Your trusted destination for healthy pets and premium pet care products.</p>
            <p className='text-[12px]  text-gray-600 text-start pl-4'>📍 Address: Your Shop Address</p>
            <p className='text-[12px]  text-gray-600 text-start pl-4'>📞 Phone: +91 XXXXX XXXXX</p>
        </div>

        <div className='w-[15%] h-[70%] bg-white rounded-[10px] shadow-lg flex flex-col items-center justify-evenly'>
           <p className='text-[16px] font-bold text-black text-start pl-4'>Quick Links</p>
           <p className='text-[14px] text-gray-600 text-start pl-4'>Home</p>
           <p className='text-[14px] text-gray-600 text-start pl-4'>About</p>
           <p className='text-[14px] text-gray-600 text-start pl-4'>Pets</p>
           <p className='text-[14px] text-gray-600 text-start pl-4'>Contact</p>
           <p className='text-[14px] text-gray-600 text-start pl-4'>Login</p>
           <p className='text-[14px] text-gray-600 text-start pl-4'>Register</p>
        </div>

         <div className='w-[10%] h-[80%] bg-white rounded-[10px] shadow-lg flex flex-col items-center justify-evenly'>
            <p className='text-[16px] font-bold text-black text-start pl-4'>Follow Us</p>
            <p className='text-[14px] text-gray-600 text-start pl-4'>Facebook</p>
            <p className='text-[14px] text-gray-600 text-start pl-4'>Instagram</p>
            <p className='text-[14px] text-gray-600 text-start pl-4'>Twitter</p>
            <p className='text-[14px] text-gray-600 text-start pl-4'>LinkedIn</p>  
        </div>
         <div className='w-[25%] h-[60%] bg-white rounded-[10px] shadow-lg flex flex-col items-center justify-evenly'>
            <p className='text-[16px] font-bold text-black text-start pl-4'>Contact Information</p>
            <p className='text-[14px] text-gray-600 text-start pl-4'>📧 Email: info@petparadise.com</p>
            <p className='text-[14px] text-gray-600 text-start pl-4'>🌐 Website: www.petparadise.com</p>
        </div>
    </div>
  )
}

export default Home_ContactSection