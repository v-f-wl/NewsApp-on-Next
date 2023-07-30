'use client'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const HeaderName = ({profileColor, name, isOpenModal}) => {
  return ( 
    <div className="bg-white rounded-lg flex w-full max-h-[70px] h-full items-center gap-4 p-3 lg:p-5 justify-between">
        <div className="flex items-center gap-4">
          <div style={{ backgroundColor: profileColor}} className="w-8 h-8 lg:w-14 lg:h-14 rounded-lg"></div>
          <span className="font-semibold text-xl lg:text-3xl text-slate-700 tracking-wide w-[210px] lg:w-[300px] overflow-hidden">
            {name}
          </span>
        </div>
        <div 
          className="lg:hidden z-20" 
          onClick={() => isOpenModal(prev => prev = !prev)}
        >
          <AiOutlineInfoCircle size={24} className='text-slate-500'/>
        </div>
      </div>
  );
}
 
export default HeaderName;