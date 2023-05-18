'use client'
import { useEffect, useState } from 'react';
import { AiOutlineMore, AiOutlineHeart, AiOutlineSend } from 'react-icons/ai'
import { CiTimer } from 'react-icons/ci'

const PostCard = ({isLoaded, postText, authorName, image}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menu = () => {
    if(isMenuOpen){
      setIsMenuOpen(false)
    }else{
      setIsMenuOpen(true)
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
    };
  
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-container')) {
        setIsMenuOpen(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])

  return ( 
    <div className=" p-4 bg-white rounded-lg flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="grid grid-cols-post grid-rows-2 items-center gap-y-0 gap-x-2">
          <div className="w-8 h-8 bg-slate-300 rounded-lg row-span-full"></div>
          <span 
            className={`
              ${isLoaded ? '' : 'w-[100px]'}
              ${isLoaded ? '' : 'h-[15px]'}
              ${isLoaded ? '' : 'bg-slate-300'}
              ${isLoaded ? '' : 'animate-pulse'}
              ${isLoaded ? '' : 'rounded-md'}
              font-light 
              text-slate-800 
              text-sm 
              self-end
            `}
          >
            {isLoaded ? authorName : ''}
          </span>
          <div className="self-start text-xs text-slate-400">
            {isLoaded ? 'now' : ''}
          </div>
        </div>
        <div className="relative menu-container z-0" onClick={() => menu()} >
          <AiOutlineMore size={22}/>
          <div 
            className={`
              ${isMenuOpen ? "visible" : "invisible"}
              ${isMenuOpen ? "top-10" : "top-0"}
              py-3
              px-2
              right-0
              absolute 
              border 
              rounded-lg
              w-[140px]
              bg-white
              shadow-md 
            shadow-slate-400/10
            `}
            >
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 cursor-pointer"><CiTimer size={24}/>Watch later</li>
              </ul>
          </div>
        </div>
      </div>
      <div 
        className={`
          ${isLoaded ? '' : 'h-[50px]'}
          ${isLoaded ? '' : 'animate-pulse'}
          ${isLoaded ? '' : 'bg-slate-300'}
          ${isLoaded ? '' : 'rounded-lg'}

          text-sm 
          lg:text-xl
          tracking-wide
        `}
      >
        {postText}
      </div>
      <div className={`
        w-full 
        ${isLoaded ? 'h-auto' : 'h-[200px]'}
        ${isLoaded ? '' : 'animate-pulse'}
        ${isLoaded ? '' : 'rounded-lg'}
        ${isLoaded ? '' : 'bg-slate-200'}
        flex gap-4
        `}
      >
      </div>
      {isLoaded ? 
        (
          <div className="flex items-center gap-5">
            <div className="px-2 py-2 border flex items-center gap-2 rounded-full">
              <AiOutlineHeart size={24} className='text-slate-400'/>
              <span className='text-slate-800'>0</span>
            </div>
            <div className="">
              <AiOutlineSend size={24} className='text-orange-400'/>
            </div>
          </div>
        ) 
        : 
        (
          <div 
            className="
              animate-pulse
              w-[100px]
              h-[40px]
              rounded-lg
              bg-slate-300
            "
          >
            
          </div>
        )
      }
    </div>
  );
}
 
export default PostCard;