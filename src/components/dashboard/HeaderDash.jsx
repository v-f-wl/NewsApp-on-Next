import { useState } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'

const HeaderDash = () => {

  const [modal, setModal] = useState(false)
  return (  
    <div 
      className="
        flex 
        items-center
        rounded-lg 
        bg-white 
        sticky 
        top-0 
        shadow-md 
        shadow-slate-400/10
      "
    >
      <div className="m-3 w-8 h-8 rounded-lg bg-slate-300"></div>
      <div
        onClick={() => setModal(true)}
        className="text-zinc-300 font-light cursor-pointer">
        {modal ? '' : 'Create Post'}
      </div>
      <div 
        className={`
          absolute 
          top-16
          ${modal ? 'opacity-100' : 'opacity-0'}
          ${modal ? 'visible' : 'invisible'}
          ${modal ? 'z-10' : '-z-10'}
          transition
          border 
          w-full 
          bg-white
          rounded-lg
          shadow-lg shadow-slate-400/40
        `}
      >
        <div className="w-full h-full relative">
          <div onClick={() => setModal(false)} className="text-slate-500 absolute top-4 right-4 cursor-pointer">
            <AiOutlineCloseCircle size={24}/>
          </div>
          <div className="py-8 px-4 flex flex-col gap-2">
            <label className="flex flex-col gap-4">
              <h3 className="font-semibold text-2xl text-slate-500">Enter You Post</h3>
              <textarea name="" id="" cols="50" rows="3" className="outline-none w-full resize-none" placeholder="Write here..."></textarea>
            </label>
            <hr />
            <button className="border w-1/4 py-2 rounded-lg ">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default HeaderDash;