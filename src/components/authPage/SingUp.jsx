'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HexColorPicker as Picker } from 'react-colorful';
import Cookies from 'js-cookie';
import axios from "axios";

import Input from "./Input";

const SingUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [color, setColor] = useState()
  const [isValid, setIsValid] = useState(false)
  const [fetchError, setFetchError] = useState(false)
  const [dataValue, setDataVelue] = useState({
    fullName: '',
    email: '',
    password: ''
  })

  const router = useRouter()

  const isValidFunc = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(emailRegex.test(dataValue.email) && dataValue.password.length >= 8 && dataValue.fullName.length > 5){
      return true
    }else{
      return false
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const fullData ={
      ...dataValue,
      color: color
    }
    if(isValidFunc()){
      setIsValid(false)
      axios.post('/api/userRegister', fullData)
      .then((res) => {
        setIsLoading(true)
        Cookies.set('token', res.data.token);
        Cookies.set('id', res.data._id);
        Cookies.set('name', res.data.fullName);
        Cookies.set('color', res.data.avatar);
        setIsLoading(false)
        router.push('/')
      })
      .catch(() => {
        setFetchError(true)
      })
    }else{
      setIsValid(true)
      return
    }
  }


  return ( 
    <div className="w-80 flex flex-col gap-8">
      {isLoading ? 
      (
        <div className="absolute inset-0 bg-slate-300 opacity-70 z-50 flex items-center justify-center">
          <div className="w-24 h-24 border-2 border-orange-400 rounded-lg animate-spin">
          </div>
        </div>
      )
      :
      null
      }
      <div className="flex justify-center">
        <span className="font-semibold text-2xl text-slate-600">SignUp</span>
      </div>
      <form  className="flex flex-col gap-4" >
      <Input
          id='fullName'
          label="Full Name"
          type="text"
          setValue={(value) => setDataVelue(value)}
        />
        <Input
          id='email'
          label="Email"
          type="email"
          setValue={(value) => setDataVelue(value)}
        />
        <Input
          id='password'
          label="Password"
          type="password"
          pas='current-password'
          setValue={(value) => setDataVelue(value)}
        />
        <div>
          <span className="block py-2 text-center">Select a color for your avatar</span>
          <div className="flex justify-center">
            <Picker color='a23333' onChange={setColor}/>
          </div>
        </div>
        {fetchError && (
          <div className="text-sm text-red-500 text-center font-light">
            The email address is already taken.
          </div>
        )}
        {isValid && (
          <div className="text-sm text-red-500 text-center font-light">
            Make sure the email is entered correctly, the password is at least 8 characters long, and the name is at least 5 characters long.
          </div>
        )}
        <button className="border border-orange-400 py-4 rounded-lg text-slate-800 text-xl" onClick={(event) => onSubmit(event)}>SingUp</button>
      </form>
      <div className="text-slate-400 inline-flex gap-4">
        Already have an account?
        <Link href='/authpage' className="text-slate-600 cursor-pointer transition hover:text-orange-400">
          LogIn
        </Link>
      </div>
    </div>
  );
}
 
export default SingUp;