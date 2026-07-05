import React from "react";

const RegisterPage = () => {
  return (
    <div className='bg-[url("login_bg.jpg")] h-screen bg-center repeat flex items-center justify-center '>
      <div className="absolute inset-0 bg-black/50">

      </div>

       <div className="relative z-10 w-[900px] h-[600px] bg-white rounded-lg shadow-lg flex flex-row items-center justify-center">
        
         <div className="w-[60%] h-[100%] flex flex-col items-center justify-center ">
              <h1 className="text-3xl font-bold mb-6">Register</h1>
                <form className="w-full max-w-sm h-[80%] flex flex-col items-center justify-center ">
                     <div className=" w-full  h-[20%] flex flex-col items-start justify-center pl-4">
                        <label className=" text-black text-start text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="w-full h-[50%] pl-4 rounded-[10px] border border-gray-300" id="email" type="email" placeholder="Enter Email ID" />
                    </div>
                    <div className=" w-full  h-[20%] flex flex-col items-start justify-center pl-4">
                        <label className=" text-black text-start text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="w-full h-[50%] pl-4 rounded-[10px] border border-gray-300" id="username" type="text" placeholder="Enter Username" />
                    </div>
                    <div className=" w-full  h-[20%] flex flex-col items-start justify-center pl-4">
                        <label className="  text-black text-start text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="w-full h-[50%] pl-4 rounded-[10px] border border-gray-300" id="password" type="password" placeholder="EnterPassword" />
                    </div>
                    <div className=" w-full  h-[20%] flex flex-col items-start justify-center pl-4">
                        <label className="  text-black text-start text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input className="w-full h-[50%] pl-4 rounded-[10px] border border-gray-300" id="confirmPassword" type="password" placeholder="Confirm Password" />
                    </div>
                    <div className="mb-2 w-full  h-[15%] flex flex-col items-start justify-center pl-4">
                        <button className="w-full h-[60%] cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Register 
                        </button>
                    </div>
                   <div className="w-full  h-[15%] flex flex-col items-center justify-start gap-4">
                        <p className="inline-block text-center align-baseline  text-sm text-black ">Already have an account? <a href="#" className="text-blue-500 hover:text-blue-800 cursor-pointer">Sign In</a></p>
                    </div>

                </form>
         </div>

          <div className="w-[40%] h-[100%] bg-[url('reg_dog.jpg')] bg-cover bg-center rounded-lg">

         </div>
       </div>
    </div>
  );
}

          
export default RegisterPage;
