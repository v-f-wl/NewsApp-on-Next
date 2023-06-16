'use client'
import { useState, useEffect } from 'react'
import { FiMoreVertical} from 'react-icons/fi'
import { AiOutlinePoweroff, AiOutlineSetting, AiOutlineBorderlessTable, AiOutlineUser } from 'react-icons/ai'
import Cookies from 'js-cookie'
import Link from 'next/link'


const Profile = () => {
  const userInfo = Cookies.get('id')
  const [linkProfile, setLinkProfile] = useState('')
  const [linkSettings, setLinkSettings] = useState('')
  const [modal, setModal] = useState(false)
  const nameInfo = Cookies.get('name')
  const color = Cookies.get('color')

  useEffect(() => {
    if(userInfo){
      setLinkProfile(`/profilepage/?id=${userInfo}`)
      setLinkSettings(`/settings/?id=${userInfo}`)
    }else{
      setLinkProfile('/authpage')
      setLinkSettings('/authpage')
    }
  }, [userInfo])

  const openModal = () => {
    setModal(modal => !modal)
  }

  const exit = () => {
    Cookies.remove('name')
    Cookies.remove('id')
    Cookies.remove('token')
    Cookies.remove('color')
    window.location.reload();
  }
  return ( 
    <div className="justify-self-end flex items-center md:gap-4 h-full">
        <div className="px-2 shadow-sm h-[40px] flex justify-between items-center gap-2 w-[240px] sm:w-[310px] lg:w-[310px] rounded-lg">
          <div className="flex items-center gap-2 overflow-hidden">
            <div 
              style={{backgroundColor: color}} 
              className="w-[25px] h-[25px] lg:max-w-[30px] lg:max-h-[30px] bg-neutral-200 rounded-lg"
            >
            </div>
            <div className="font-light text-sm text-slate-800 w-3/4 overflow-hidden">
              {nameInfo}
            </div>
          </div>
          <div className="relative" >
            <FiMoreVertical 
              onClick={() => openModal()}
              size={24} 
              className='text-orange-600 cursor-pointer'
            />
            {!modal ? null : 
              (
                <div className="w-[150px] absolute bg-white p-4 right-0 top-10 border  rounded-lg z-20">
                  <ul className='flex flex-col gap-3'>
                    <Link href="/" className="cursor-pointer flex items-center gap-1">
                      <AiOutlineBorderlessTable size={18}/>
                      Dashdoard
                    </Link>
                    <Link href={linkProfile} className="cursor-pointer flex items-center gap-1">
                      <AiOutlineUser size={18}/>
                      Profile
                    </Link>
                    <Link href={linkSettings} className="cursor-pointer flex items-center gap-1">
                      <AiOutlineSetting size={18}/>
                      Settings
                    </Link>
                    <li className="cursor-pointer flex items-center gap-1" onClick={() => exit()}>
                      <AiOutlinePoweroff size={18}/>
                      Log out
                    </li>
                  </ul>
                </div>
              )
            }
          </div>
        </div>
    </div>
  );
}
 
export default Profile;