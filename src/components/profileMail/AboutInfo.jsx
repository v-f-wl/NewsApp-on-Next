'use client'
import { useState } from 'react';
import { AiOutlineEdit, AiOutlineInfoCircle } from 'react-icons/ai'

import ProfileTitle from "./ProfileTitle";
import AboutModal from './AboutModal';

const AboutInfo = ({isPerson, city, age, hobbies}) => {
  const [isModal, setIsModal] = useState(false)
  const [mobileBlock, setMobileBlock] = useState(false)

  const LiItem = ({children}) => (
    <li className="flex gap-2 items-start">
      {children}
    </li>
  )
  const LiTitle = ({title}) => (
    <h3 className="text-slate-600 font-semibold text-lg w-[100px]">{title}</h3>
  )
  const LiValue = ({value}) => (
    <span className="pt-[2px] w-[200px] text-slate-500">{value}</span>
  )


  return ( 
    <div className="
      absolute
      top-20
      right-0
      h-auto
      px-2
      py-4
      w-full
      min-h-8
      rounded-lg
      overflow-hidden
      lg:sticky
      lg:px-4 
      lg:py-8 
      lg:bg-white
    "
    >
      <div 
        onClick={() => setMobileBlock(!mobileBlock)}
        className="
          absolute 
          top-3 
          right-4 
          w-8 
          h-8 
          flex 
          items-center 
          justify-center 
          rounede-lg 
          lg:hidden
        " 
      >
        <AiOutlineInfoCircle size={24} className='text-slate-500'/>
      </div>
      <div className={`
        ${mobileBlock ? 'visible' : 'invisible'} 
        ${mobileBlock ? 'opacity-100' : 'opacity-0'} 
        top-8 
        mt-12 
        p-4
        bg-white 
        border
        rounded-lg
        transition-all
        
        lg:mt-0 
        lg:p-0
        lg:visible
        lg:opacity-100
        lg:block
        lg:border-none
        `}
      >
        <div className="relative">
            <ProfileTitle title='About Me'/>
            <AiOutlineEdit 
              onClick={() => setIsModal(true)}
              size={24} 
              className={`
                ${isPerson ? 'block' : 'hidden'}
                absolute 
                top-0
                right-0
                cursor-pointer
                lg:right-4 
              `}
            />
          </div>
          <ul className='mt-6 flex flex-col gap-3'>
            <LiItem>
              <LiTitle title='City'/>
              <LiValue value={city}/>
            </LiItem>
            <LiItem>
              <LiTitle title='Age'/>
              <LiValue value={age}/>
            </LiItem>
            <LiItem>
              <LiTitle title='Hobbies'/>
              <LiValue value={hobbies}/>
            </LiItem>
          </ul>
          <AboutModal 
            isModals={isModal}
            valueHobbies={hobbies}
            valueCity={city}
            valueAge={age}
            closeModals={() => setIsModal(false)}
          />
      </div>
    </div>
  );
}
 
export default AboutInfo;