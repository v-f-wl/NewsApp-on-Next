'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";

import Input from "./Input";

const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const [dataValue, setDataVelue] = useState({email: '', password: ''})


  const onSubmit = async(event) => {
    event.preventDefault()
    axios.post('/api/userLogin', dataValue)
    .then(res => {
      setIsLoading(true)
      Cookies.set('id', res.data._id);
      Cookies.set('name', res.data.fullName);
      Cookies.set('token', res.data.token);
      Cookies.set('color', res.data.avatar);
      setIsLoading(false)
      router.push('/')
    })
    .catch((err) =>{
      setSuccess(true)
    }
    )
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
        <span className="font-semibold text-2xl text-slate-600">LogIn</span>
      </div>
      {success ? (
        <div className="text-red-400">
          Something went wrong...
        </div>
      ) : null}
      <form className="flex flex-col gap-4">
        <Input
          id='email'
          label="Email"
          type="email"
          error={true}
          setValue={(value) => setDataVelue(value)}
        />
        <Input
          id='password'
          label="Password"
          type="password"
          pas='current-password'
          error={true}
          setValue={(value) => setDataVelue(value)}
        />
        <button onClick={(e) => onSubmit(e)} className="border border-orange-400 py-4 rounded-lg text-slate-800 text-xl">LogIn</button>
      </form>
      <div className="text-slate-400 inline-flex gap-2 flex-wrap">
        First time using Flumpf?
        <Link href='/authpage?id=signup' className="text-slate-600 cursor-pointer transition hover:text-orange-400">
        Create an account
      </Link>
      </div>
    </div>
  );
}
 
export default LogIn;