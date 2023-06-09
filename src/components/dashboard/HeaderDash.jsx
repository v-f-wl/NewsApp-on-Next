'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineCloseCircle, AiOutlinePicture, AiOutlineClose } from 'react-icons/ai'
import Cookies from "js-cookie";
import axios from "axios";

const HeaderDash = () => {
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const [imageSrc, setImageSrc] = useState(null);
  const [postValue, setPostValue] = useState('')
  const [isCreating, setIsCreating] = useState(false)
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

  const removeImage = () => {
    setImageSrc(null)
  }
  function handleOnChange(changeEvent) {
    const reader = new FileReader();
    reader.onload = function(onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
    }

    reader.readAsDataURL(changeEvent.target.files[0]);
  }
  const createPost = () => {
    setIsCreating(true)
    if(imageSrc === null && postValue.length === 0){
      setIsCreating(false)
      return false
    }

    try{
      const headers = {
        'Content-Type': 'application/json'
      }
      const file = JSON.stringify({data: imageSrc})

      if(imageSrc === null){
        try {
          const bodyInfo = {
            text: postValue,
            nameValue: nameValue,
            userId: idValue,
            color: color,
          };

          axios.post('/api/postCreate', bodyInfo)
          .then(res => console.log(res))
          setModal(false);
          setIsCreating(false);
          setImageSrc(null)
          setPostValue('')
          window.location.reload()
        } catch (error) {
          console.log(error)
        }
      }else{
        axios.post("/api/uploads/", file, { headers })
        .then(async res => {
          const bodyInfo = {
            text: postValue,
            nameValue: nameValue,
            userId: idValue,
            color: color,
            imagePost: [{url: res.data.url, id: res.data.id}] // Добавляем URL изображения в массив
          };
      
      
          try {
            await axios.post('/api/postCreate', bodyInfo)
            .then(res => console.log(res))
            setModal(false);
            setIsCreating(false);
            setImageSrc(null)
            setPostValue('')
            window.location.reload()
          } catch (error) {
            console.log(error);
          }
        })
      }

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
          overflow-hidden
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
          <div className="py-8 px-4 flex flex-col gap-2 relative">
            {isCreating ? (
              <div className="absolute inset-0 bg-slate-400 bg-opacity-40 z-30 flex items-center justify-center">
                <div className="p-8 border border-white rounded-lg animate-spin"></div>
              </div>
              )
              :
              (null)
            }
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
            {imageSrc && (
              <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] relative">
                <div className="absolute bg-white top-2 right-2 rounded-md" onClick={() => removeImage()}>
                  <AiOutlineClose size={24} className="text-orange-400 cursor-pointer"/>
                </div>
                <img className="w-full h-full rounded-lg object-cover object-center" src={imageSrc} />
              </div>
            )}
            <div className="flex items-center">
              <div className="w-[30px] h-[30px] overflow-hidden border relative flex items-center justify-center rounded-sm">
                <AiOutlinePicture size={26} className="text-orange-400"/>
                <form method="post"  onChange={handleOnChange} className="absolute top-0 opacity-0 cursor-pointer">
                  <input type="file" name="file" className="cursor-pointer"/>
                </form>
              </div>
            </div>
            <hr />
            <button className="border w-1/4 py-2 rounded-lg" onClick={createPost}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default HeaderDash;