'use client'
import { useState } from "react";
import Profile from "./headerUI/Profile";
import Search from "./headerUI/Search";

const Header = () => {

  const [isAuth, setIsAuth] = useState(false)

  return (  
    <div className="h-[65px] bg-white rounded-b-lg grid grid-cols-2 lg:grid-cols-3 items-center px-5 shadow-md shadow-slate-400/10">
      <div className="">
        Logo
      </div>
      <Search/>
      {isAuth ? 
        (
          <Profile/>
        )
        :
        (
          <div className="justify-self-end flex gap-4 items-center">
            <div className="py-2 px-3 rounded-lg border text-orange-400">LogIn</div>
            <div className="py-2 px-3 rounded-lg bg-orange-400 text-white">Sign In</div>
          </div>
        ) 
      }
    </div>
  );
}
 
export default Header;