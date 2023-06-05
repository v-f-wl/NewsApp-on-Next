'use client'
import { useEffect, useState } from 'react';
import { AiOutlineMore, AiOutlineHeart, AiOutlineSend } from 'react-icons/ai'
import { CiBookmarkPlus, CiBookmarkMinus } from 'react-icons/ci'

const PostCard = ({isLoaded, postText, authorName, createdAt, color}) => {
  console.log(color)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPin, setIsPin] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const createData = new Date(createdAt)
  const options = { hour: 'numeric', minute: 'numeric', year: 'numeric', month: 'long', day: 'numeric'};
  const dateString = createData.toLocaleDateString('en-US', options);
  const menu = (event) => {
    if(isMenuOpen && !event.target.closest('.pin')){
      setIsMenuOpen(false)
    }else{
      setIsMenuOpen(true)
    }
  }
  const addPin = () => {
    setIsPin(!isPin)
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-container') || event.target.closest('.pin')) {
        setIsMenuOpen(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])

  return ( 
    <div className=" p-4 bg-white rounded-lg flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="grid grid-cols-post grid-rows-2 items-center gap-y-0 gap-x-2">
          <div style={{backgroundColor: color}} className="w-8 h-8 rounded-lg row-span-full"></div>
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
            {isLoaded ? dateString : ''}
          </div>
        </div>
        <div className="relative menu-container z-0" onClick={(e) => menu(e)} >
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
                <li 
                  onClick={() => addPin()}
                  className={`
                    pin
                    relative
                    z-20
                    pin
                    flex 
                    items-center 
                    gap-2 
                    cursor-pointer
                  `}
                >
                  {isPin ? (
                    <>
                        <CiBookmarkMinus size={24}/>
                        <span>Remove Pin</span>
                    </>
                  ) : (
                    <>
                        <CiBookmarkPlus size={24}/>
                        <span>Add Pin</span>
                    </>
                  )}
                </li>
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
      {isLoaded ? 
        (
          <div className="flex items-center gap-5">
            <div 
              onClick={() => setIsLiked(!isLiked)}
              className="px-2 py-2 border flex items-center gap-2 rounded-full cursor-pointer"
            >
              <AiOutlineHeart size={24} 
                className={`
                  ${isLiked ? "text-red-500" : "text-slate-400"}
                `}
              />
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