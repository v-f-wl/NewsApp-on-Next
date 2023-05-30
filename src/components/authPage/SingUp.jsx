'use client'
import Link from "next/link";
import Input from "./Input";
import { HexColorPicker as Picker } from 'react-colorful';
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form'
import axios from "axios";
import { useState } from "react";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

const SingUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [color, setColor] = useState()

  const router = useRouter()
  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: ''
    },
  })
  const onSubmit = async (data) => {
    const fullData ={
      ...data,
      color: color
    }
    console.log(fullData)
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
    .catch((error) => console.log(error))
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
      <form action="handleSubmit" className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
          id='fullName'
          label="Full Name"
          type="text"
          required
          register={register}
          errors={errors}
        />
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
          pas='current-password'
          required
          register={register}
          errors={errors}
        />
        <div>
          <span className="block py-2 text-center">Select a color for your avatar</span>
          <div className="flex justify-center">
            <Picker color='a23333' onChange={setColor}/>
          </div>
        </div>
        <button className="border border-orange-400 py-4 rounded-lg text-slate-800 text-xl" type="submit">SingUp</button>
      </form>
      <div className="text-slate-400 inline-flex gap-4">
        Already have an account?
        <Link href='/auth' className="text-slate-600 cursor-pointer transition hover:text-orange-400">
          LogIn
      </Link>
      </div>
    </div>
  );
}
 
export default SingUp;