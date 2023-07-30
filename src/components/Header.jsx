'use client'
import { useEffect, useState } from "react";
import { AiOutlineHolder} from 'react-icons/ai'
import Cookies from "js-cookie";
import Link from "next/link";

import Profile from "./headerUI/Profile";


const Header = ({search}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const info = Cookies.get('id')

  useEffect(() => {
    if(info){
      setIsAuth(true)
    }
    setIsLoading(true)
  }, [info])

  const Buttons = () =>(
    <div className="justify-self-end flex gap-4 items-center">
      <Link href='/authpage' className="cursor-pointer py-2 px-3 rounded-lg border text-orange-400">LogIn</Link>
      <Link href='/authpage?id=signup' className="cursor-pointer py-2 px-3 rounded-lg bg-orange-400 text-white">Sign Up</Link>
    </div>
  )
  
  return (  
    <header className="h-[65px] bg-white rounded-b-lg grid grid-cols-2 lg:grid-cols-3 grid-rows-1 items-center px-5 shadow-md shadow-slate-400/10">
      <Link href='/' className="font-semibold text-slate-600 text-base lg:text-2xl flex items-center gap-1">
        <AiOutlineHolder size={24}/> 
        <div className="">Flumpf</div>
      </Link>
      <div className="hidden lg:block p-2"></div>
      {!isLoading ? null :  isAuth ? <Profile/> : <Buttons/>
      }
    </header>
  );
}
 
export default Header;