import { useState } from "react";

const LogIn = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPassowordValue] = useState('')
  return ( 
    <form className='flex flex-col gap-8'>
      <label className='flex flex-col'>
        <span className="text-md text-slate-700">Email</span>
        <input 
          type="email" 
          name="email"
          placeholder='Enter Your Email' 
          className='outline-none py-1 px-3 border-b'
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          /> 
      </label>
      <label className='flex flex-col'>
        <span className="text-md text-slate-700">Password</span>
        <input 
          type="password" 
          name="password"
          placeholder='Create A Password' 
          className='outline-none py-1 px-3 border-b'
          value={passwordValue}
          onChange={(e) => setPassowordValue(e.target.value)}
          />
      </label>
      <button 
        type="submit"
        className='w-full border mt-4 py-2 rounded-lg'
      >
        LogIn
      </button>
    </form>
  );
}
 
export default LogIn;