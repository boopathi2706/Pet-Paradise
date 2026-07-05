import React,{useState} from 'react'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true)
  return (
    <div className='w-screen flex flex-row items-center justify-center relative top-0 z-2'>
            <div className='absolute top-5 fixed w-[90%] bg-white shadow-md rounded-[40px]'>
                <div className='flex items-center justify-between pr-6 pl-6'>
                    <div className='w-[30%] flex items-center justify-start h-full'>
                        <img src='logo_one_light_theme.png' alt='Logo' className='w-[30%] h-[10%]' />
                    </div>
                    <div className='flex space-x-4'>
                        <a href='#' className='hover:text-blue-500'>Login</a>
                        <a href='#' className='hover:text-blue-500'>Register</a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Navbar