'use client'
import { useState } from 'react'
import { FiMoreVertical} from 'react-icons/fi'
import Cookies from 'js-cookie'


const Profile = () => {
  const [modal, setModal] = useState(false)
  const nameInfo = Cookies.get('name')
  const color = Cookies.get('color')

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
                <div className="w-[100px] absolute bg-white p-2 right-0 top-10 border border-orange-400 rounded-lg z-20">
                  <ul >
                    <li className="cursor-pointer" onClick={() => exit()}>
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