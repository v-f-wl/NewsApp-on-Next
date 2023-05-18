'use client'
import { useState } from 'react'
import 'tailwindcss/tailwind.css';

const Auth = () => {
  const [isSingIn, setIsSingIn] = useState(false)

  const SignUp = (
      <div className="mt-16">
        <form className='flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className="text-md text-slate-700">Name</span>
            <input 
              type="text" 
              placeholder='Enter Your Name' 
              className='outline-none py-1 px-3 border-b'/>
          </label>
          <label className='flex flex-col'>
            <span className="text-md text-slate-700">Email</span>
            <input 
              type="mail" 
              placeholder='Enter Your Email' 
              className='outline-none py-1 px-3 border-b'/>
          </label>
          <label className='flex flex-col'>
            <span className="text-md text-slate-700">Password</span>
            <input 
              type="password" 
              placeholder='Create A Password' 
              className='outline-none py-1 px-3 border-b'/>
          </label>
          <button className='w-full border mt-4 py-2 rounded-lg'>SignUp</button>
        </form>
      </div>
  )

  const SingIn =(
    <div className="mt-16">
      <form className='flex flex-col gap-8'>
        <label className='flex flex-col'>
          <span className="text-md text-slate-700">Email</span>
          <input 
            type="mail" 
            placeholder='Enter Your Email' 
            className='outline-none py-1 px-3 border-b'/>
        </label>
        <label className='flex flex-col'>
          <span className="text-md text-slate-700">Password</span>
          <input 
            type="password" 
            placeholder='Create A Password' 
            className='outline-none py-1 px-3 border-b'/>
        </label>
        <button className='w-full border mt-4 py-2 rounded-lg'>LogIn</button>
      </form>
    </div>
  )
  
  return ( 
    <div>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-2/3 h-3/4 bg-white rounded-lg grid grid-cols-2 overflow-hidden">
          <div className="p-12 bg-orange-400 flex flex-col justify-center text-white gap-8">
            <h2 className="text-4xl font-semibold">Welcome To AirPlay</h2>
            <span className="font-mono">The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.</span>
          </div>
          <div className="flex justify-center items-center">
              <div className=" flex- flex-col gap-7">
                <div className="border-b py-4 flex gap-8">
                  <button onClick={() => setIsSingIn(false)} className={`font-semibold text-slate-700 ${isSingIn ? 'opacity-60' : ''}`}>LogIn</button>
                  <button onClick={() => setIsSingIn(true)} className={`font-semibold text-slate-700 ${isSingIn ? '' : 'opacity-60'}`}>Sing In</button>
                </div>
                <div className="w-[300px] h-[500px]">
                  {isSingIn ? SignUp : SingIn}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Auth;