'use client'
import { useEffect, useState } from "react";
import Profile from "./headerUI/Profile";
import Search from "./headerUI/Search";
import Link from "next/link";
import Cookies from "js-cookie";


const Header = ({search}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const info = Cookies.get('id')

  useEffect(() => {
    if(info){
      setIsAuth(true)
    }
    setIsLoading(true)
  }, [])
  useEffect(() => {}, [])
  const Buttons = () =>(
    <div className="justify-self-end flex gap-4 items-center">
      <Link href='/authpage' className="cursor-pointer py-2 px-3 rounded-lg border text-orange-400">LogIn</Link>
      <Link href='/authpage?id=signup' className="cursor-pointer py-2 px-3 rounded-lg bg-orange-400 text-white">Sign Up</Link>
    </div>
  )
  
  return (  
    <div className="h-[65px] bg-white rounded-b-lg grid grid-cols-2 lg:grid-cols-3 grid-rows-1 items-center px-5 shadow-md shadow-slate-400/10">
      <Link href='/' className="text-2xl font-semibold text-slate-600 tracking-big">
        AirPlay
      </Link>
      {search ? (<Search/>) : (<div className="hidden lg:block"></div>)}
      {!isLoading ? null :  isAuth ? <Profile/> : <Buttons/>
      }
    </div>
  );
}
 
export default Header;