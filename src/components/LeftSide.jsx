'use client'
import { useEffect, useState } from 'react';
import { AiOutlineUser, AiOutlineBorderlessTable, AiOutlineMail, AiOutlineTeam, AiOutlineSetting, AiOutlinePushpin } from 'react-icons/ai'
import Link from 'next/link';
import Cookies from 'js-cookie';

const LeftSide = () => {
  const userInfo = Cookies.get('id')
  const [linkInfo, setLinkInfo] = useState('')
  useEffect(() => {
    if(userInfo){
      setLinkInfo(`/profilepage/?id=${userInfo}`)
    }else{
      setLinkInfo('/authpage')
    }
  }, [userInfo])
  return ( 
    <div className="h-[60px] lg:h-full bg-white lg:bg-transparent rounded-lg">
      <ul className="flex items-center justify-center lg:justify-start lg:items-start lg:flex-col gap-8 lg:gap-4 py-2">
        <Link href={linkInfo} className="flex gap-2 items-center cursor-pointer">
            <AiOutlineUser size={24} className='text-orange-500'/>
          <span className="hidden lg:block mt-0 tracking-wider">Profile</span>
        </Link>
        <Link href='/' className="flex gap-2 items-center cursor-pointer">
            <AiOutlineBorderlessTable size={24} className='text-orange-500'/>
          <span className="hidden lg:block mt-0 tracking-wider">Dashdoard</span>
        </Link>
        <Link href='/soon' className="flex gap-2 items-center cursor-pointer">
            <AiOutlinePushpin size={24} className='text-orange-500'/>
          <span className="hidden lg:block mt-0 tracking-wider">Your Pins</span>
        </Link>
        {/* <li className="flex gap-2 items-center cursor-pointer">
            <AiOutlineMail size={24} className='text-orange-500'/>
          <span className="hidden lg:block mt-0 tracking-wider">Chats</span>
        </li>
        <li className="flex gap-2 items-center cursor-pointer">
            <AiOutlineTeam size={24} className='text-orange-500'/>
          <span className="hidden lg:block mt-0 tracking-wider">Friends</span>
        </li> */}
        <li className="flex gap-2 items-center cursor-pointer">
            <AiOutlineSetting size={24} className='text-orange-500'/>
          <span className="hidden lg:block mt-0 tracking-wider">Settings</span>
        </li>
      </ul>
    </div>
  );
}
 
export default LeftSide;