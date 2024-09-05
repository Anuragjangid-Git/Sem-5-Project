import React, { useState } from 'react';
import './Login.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Login = () => {

const [showPassword,setShowPassword] = useState(false);


  return (
    <div className=" login-box flex items-center justify-center min-h-screen bg-gradient-to-b from-[#141e30] to-[#2a6c56]">
      <div className="  relative w-96 p-10 bg-black bg-opacity-50 shadow-xl rounded-lg">
        <h2 className="text-2xl text-center text-white mb-8">Login </h2>
        <form>
          <div className=" user-box relative mb-8">
            <input
              type="text"
              required
              className="w-full px-0 py-2 text-lg text-white bg-transparent border-b-2 border-white outline-none focus:border-[#03f484] transition-colors"
            />
            <label className="absolute left-0 top-2.5 text-lg text-white transition-all transform origin-left peer-focus:-translate-y-5 peer-focus:text-[#03f484] peer-valid:-translate-y-5 peer-valid:text-[#03f484]">
              Username
            </label>
          </div>
          <div className=" user-box relative mb-8 flex  ">
            <input
              type={showPassword?"text":"password"}
              required
              className="w-full px-0 py-2 text-lg text-white bg-transparent border-b-2 border-white outline-none focus:border-[#03f484] transition-colors"
            />
            <label className="absolute left-0 top-2.5 text-lg text-white transition-all transform origin-left peer-focus:-translate-y-5 peer-focus:text-[#03f484] peer-valid:-translate-y-5 peer-valid:text-[#03f484]">
              Password
            </label>
            <div onClick={()=>setShowPassword(!showPassword)}>
            
                {showPassword?
            <FaEye color='white' className='mt-[17px]' />:
            <FaEyeSlash color='white' className='mt-[17px]' />
                }
            </div>
            
          </div>
          <a
            href="#"
            className="relative inline-block px-5 py-2.5 text-lg text-[#03f484] uppercase tracking-widest transition-all duration-500 hover:bg-[#03f484] hover:text-white rounded-md shadow-[0_0_5px_#03f484,0_0_25px_#03f484,0_0_50px_#03f484,0_0_100px_#03f484]"
          >
            <span className="absolute block w-full h-0.5 bg-gradient-to-r from-transparent to-[#03f484] left-[-100%] top-0 transition-all duration-1000"></span>
            <span className="absolute block w-0.5 h-full bg-gradient-to-b from-transparent to-[#03f484] right-0 top-[-100%] transition-all duration-1000 delay-250"></span>
            <span className="absolute block w-full h-0.5 bg-gradient-to-l from-transparent to-[#03f484] right-[-100%] bottom-0 transition-all duration-1000 delay-500"></span>
            <span className="absolute block w-0.5 h-full bg-gradient-to-t from-transparent to-[#03f484] left-0 bottom-[-100%] transition-all duration-1000 delay-750"></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
