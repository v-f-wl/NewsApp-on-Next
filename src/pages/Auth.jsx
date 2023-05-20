'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import axios from 'axios';
import LogIn from '../components/authForm/LogIn';
import SingIn from '../components/authForm/SingIn';


const Auth = () => {
  const router = useRouter();
  const { id } = router.query;
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPassowordValue] = useState('')
  const [firstNameValue, setFirstNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')
  const [isSingIn, setIsSingIn] = useState(false)
  
  useEffect(() => {
    if(id === 'signin'){
      setIsSingIn(true)
    }
  },[id])

  return ( 
    <div>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-full h-full lg:w-2/3 lg:h-3/4 bg-white lg:rounded-lg lg:grid lg:grid-cols-2 overflow-hidden">
          <div className="p-12 bg-orange-400 flex flex-col justify-center text-white gap-8">
            <h2 className="text-4xl font-semibold">Welcome To AirPlay</h2>
            <span className="font-mono hidden lg:block">
              The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used 
              to be Cicero—in an attempt to make the days before computerized design a little less painstaking.
              </span>
          </div>
          <div className="mt-8 lg:mt-0 flex justify-center items-center ">
              <div className=" flex- flex-col gap-7">
                <div className="border-b py-4 flex gap-8">
                  <button 
                    onClick={() => setIsSingIn(false)} 
                    className={`font-semibold text-slate-700 ${isSingIn ? 'opacity-60' : ''}`}
                  >
                    LogIn
                  </button>
                  <button 
                    onClick={() => setIsSingIn(true)} 
                    className={`font-semibold text-slate-700 ${isSingIn ? '' : 'opacity-60'}`}
                  >
                    Sing In
                  </button>
                </div>
                <div className="w-[300px] h-[500px] pt-10">
                  {isSingIn ? <SingIn/> : <LogIn/>}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Auth;