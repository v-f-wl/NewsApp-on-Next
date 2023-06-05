'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Cookies from "js-cookie";
import axios from "axios";

const HeaderDash = () => {
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const [postValue, setPostValue] = useState('')
  const idValue = Cookies.get('id')
  const nameValue = Cookies.get('name')
  const color = Cookies.get('color')
  const isUser = () => {
    if(Cookies.get('token')){
      setModal(true)
    }else{
      router.push('/authpage')
    }
  }

  const createPost = () => {
    try{
      const bodyInfo = {
        text: postValue,
        nameValue: nameValue,
        userId: idValue,
        color: color
      }  

      axios.post('/api/postCreate', bodyInfo)
      .then((res) => console.log(res))
      .then(() => {
        setModal(false)
        window.location.reload();
      })
      .catch((error) = console.log(error))
    }catch(error){

    }
  }
  return (  
    <div 
      className="
        flex 
        items-center
        rounded-lg 
        bg-white 
        sticky 
        z-10
        top-0 
        shadow-md 
        shadow-slate-400/10
      "
    >
      <div className="m-3 w-8 h-8 rounded-lg bg-slate-300"></div>
      <div
        onClick={() => isUser()}
        className="text-zinc-300 font-light text-sm lg:text-base cursor-pointer w-full">
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
          <div onClick={() => setModal(false)} 
            className=" 
              text-slate-500 
              absolute 
              top-4
              right-4 
              cursor-pointer
              z-10
            "
            >
            <AiOutlineCloseCircle size={24}/>
          </div>
          <div className="py-8 px-4 flex flex-col gap-2">
            <label className="flex flex-col gap-4">
              <h3 className="font-semibold text-2xl text-slate-500">Enter You Post</h3>
              <textarea 
                value={postValue}
                onChange={(e) => setPostValue(e.target.value)}
                cols="50" 
                rows="3" 
                className="outline-none w-full resize-none" 
                placeholder="Write here..."></textarea>
            </label>
            <hr />
            <button onClick={() => createPost()} className="border w-1/4 py-2 rounded-lg ">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default HeaderDash;