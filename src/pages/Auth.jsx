'use client'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import addUser from '../store/userSlice'
import 'tailwindcss/tailwind.css';
import { useCookies } from 'react-cookie';




const Auth = () => {

  const [modal, setModal] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [isSingIn, setIsSingIn] = useState(false)
  const [cookie, setCookie] = useCookies(['userName', 'userId'])


  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if(id == 'signin'){
      setIsSingIn(true)
    }
  }, [id])

  const singUp = async (event) => {
    event.preventDefault()
    setModal(true)
    await axios.post('/api/userRegister', {
      fullName: firstName,
      email: emailValue,
      password: passwordValue
    })
    .then(() => {
      router.push('/')
      setModal(false)
      console.table(res.data)
    })
  }

  const logIn = async (event) => {
    event.preventDefault()
    setLoginError('')
    setModal(true)

    await axios.post('/api/userLogin', {
      email: emailValue,
      password: passwordValue
    }).then((res) => {
      setCookie("userName", res.data.fullName)
      setCookie("userId", res.data._id)
      setModal(false)
      // router.push('/')
      console.table(res.data)
    }).catch(() => {
      setLoginError('Не удалось войти')
      setModal(false)
    })
  }

  const SignIn = (
      <div className="mt-16">
        <form className='flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className="text-md text-slate-700">Name</span>
            <input 
              type="text" 
              placeholder='Enter Your Full Name' 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='outline-none py-1 px-3 border-b'/>
          </label>
          <label className='flex flex-col'>
            <span className="text-md text-slate-700">Email</span>
            <input 
              type="mail" 
              placeholder='Enter Your Email' 
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              className='outline-none py-1 px-3 border-b'/>
          </label>
          <label className='flex flex-col'>
            <span className="text-md text-slate-700">Password</span>
            <input 
              type="password" 
              placeholder='Create A Password' 
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              className='outline-none py-1 px-3 border-b'/>
          </label>
          <button
            className='w-full border mt-4 py-2 rounded-lg'
            onClick={(e) => singUp(e)}
          >SignUp</button>
        </form>
      </div>
  )

  const LogIn =(
    <div className="mt-16">
      <form className='flex flex-col gap-8'>
        <label className='flex flex-col'>
          <span className="text-md text-slate-700">Email</span>
          <input 
            type="mail" 
            placeholder='Enter Your Email' 
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            className='outline-none py-1 px-3 border-b'
            />
        </label>
        <label className='flex flex-col'>
          <span className="text-md text-slate-700">Password</span>
          <input 
            type="password" 
            placeholder='Create A Password' 
            className='outline-none py-1 px-3 border-b'
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            />

        </label>
        <button 
          type="submit"
          onClick={(e) => logIn(e)}
          className='w-full border mt-4 py-2 rounded-lg'
          >LogIn</button>
      </form>
    </div>
  )
  
  return ( 
    <div className="w-screen h-screen flex items-center justify-center relative">
      <div 
        className={`
          ${modal ? 'flex' : 'hidden'}
          items-center
          justify-center
          opacity-80
          absolute 
          top-0 
          left-0 
          bottom-0 
          right-0 
          bg-slate-700 
          z-10
        `}
      >
      <span className="animate-spin p-5 border rounded-xl">
      </span>
      </div>
      <div className="w-2/3 h-3/4 bg-white rounded-lg grid grid-cols-2 overflow-hidden">
        <div className="p-12 bg-orange-400 flex flex-col justify-center text-white gap-8">
          <h2 className="text-4xl font-semibold">Welcome To AirPlay</h2>
          <span className="font-mono">The decade that brought us Star Trek and Doctor Who also resurrected Cicero—or at least what used to be Cicero—in an attempt to make the days before computerized design a little less painstaking.</span>
        </div>
        <div className="flex justify-center items-center">
            <div className=" flex- flex-col gap-5">
              <div className="border-b py-4 flex gap-8">
                <button onClick={() => setIsSingIn(false)} className={`font-semibold text-slate-700 ${isSingIn ? 'opacity-60' : ''}`}>LogIn</button>
                <button onClick={() => setIsSingIn(true)} className={`font-semibold text-slate-700 ${isSingIn ? '' : 'opacity-60'}`}>Sing Up</button>
              </div>
              <div className="pt-2 text-red-500 font-medium">{loginError}</div>
              <div className="w-[300px] h-[500px]">
                {isSingIn ? SignIn : LogIn}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
 
export default Auth;