'use client'
import Link from "next/link";
import Input from "./Input";
import {
  FieldValues,
  handleSubmit,
  useForm
} from 'react-hook-form'
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
  })

  const onSubmit = async(data) => {
    axios.post('/api/userLogin', data)
    .then(res => {
      setIsLoading(true)
      Cookies.set('id', res.data._id);
      Cookies.set('name', res.data.fullName);
      Cookies.set('token', res.data.token);
      Cookies.set('color', res.data.avatar);
      setIsLoading(false)
      router.push('/')
    })
    .catch((err) => console.log(err))
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
      <form action='handleSubmit' className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id='email'
          label="Email"
          type="email"
          required
          register={register}
          errors={errors}
        />
        <Input
          id='password'
          label="Password"
          type="password"
          required
          pas='current-password'
          register={register}
          errors={errors}
        />
        <button className="border border-orange-400 py-4 rounded-lg text-slate-800 text-xl" type="submit">LogIn</button>
      </form>
      <div className="text-slate-400 inline-flex gap-2 flex-wrap">
        First time using AirPlay?
        <Link href='/authpage?id=signup' className="text-slate-600 cursor-pointer transition hover:text-orange-400">
        Create an account
      </Link>
      </div>
    </div>
  );
}
 
export default LogIn;