'use client'
import { useEffect, useState } from "react";
import Profile from "./headerUI/Profile";
import Search from "./headerUI/Search";
import Link from "next/link";
import Cookies from "js-cookie";


const Header = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [cook, setCook] = useState(() => Cookies.get('token'))
  useEffect(() => {
    if(cook){
      setIsAuth(true)
    }else{
      setIsAuth(false)
    }
  },[cook])

  return (  
    <div className="h-[65px] bg-white rounded-b-lg grid grid-cols-2 lg:grid-cols-3 items-center px-5 shadow-md shadow-slate-400/10">
      <Link href='/' className="text-2xl font-semibold text-slate-600 tracking-big">
        AirPlay
      </Link>
      <Search/>
      {isAuth ? 
        (
          <Profile/>
        )
        :
        (
          <div className="justify-self-end flex gap-4 items-center">
            <Link href='/auth' className="py-2 px-3 rounded-lg border text-orange-400">LogIn</Link>
            <Link href='/auth?id=signin' className="py-2 px-3 rounded-lg bg-orange-400 text-white">Sign In</Link>
          </div>
        ) 
      }
    </div>
  );
}
 
export default Header;