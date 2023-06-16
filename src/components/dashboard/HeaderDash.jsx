'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineCloseCircle, AiOutlinePicture, AiOutlineClose, AiOutlineForm } from 'react-icons/ai'
import Cookies from "js-cookie";
import axios from "axios";
import Compressor from 'compressorjs';

import TagsModal from "./TagsModal";

const HeaderDash = () => {
  const [modal, setModal] = useState(false)
  const [imageSrc, setImageSrc] = useState(null);
  const [postValue, setPostValue] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [getTags, setGetTags] = useState([])
  const router = useRouter()
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
  async function handleOnChange(changeEvent) {
  const imageFile = changeEvent.target.files[0]
    try {
      const maxSizeMB = 1
      const compressedFile = await new Promise((resolve, reject) => {
        new Compressor(imageFile, {
          quality: 0.95,
          maxWidth: 900,
          maxHeight: 900,
          success(result) {
            if (result.size <= maxSizeMB * 1024 * 1024) {
              const reader = new FileReader()
              reader.onload = function (e) {
                const base64Image = e.target.result;
                setImageSrc(base64Image)
              }
              reader.onerror = function (error) {
                reject(error)
              }
              reader.readAsDataURL(result)
            } else {
              console.log('error')
            }
          },
          error(error) {
            reject(error)
          },
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  const uploadPost = async() => {
    setIsCreating(true)
    if(imageSrc === null && postValue.length === 0){
      setIsCreating(false)
      return false
    }
    try{
      if(imageSrc === null){
        const bodyInfo = {
          text: postValue,
          nameValue: nameValue,
          userId: idValue,
          color: color,
          tags: getTags
        }
        
        axios.post('/api/postCreate', bodyInfo)
        .then(res => console.log(res))
        .catch(() => {
          setIsCreating(false);
        })
        setModal(false);
        setIsCreating(false);
        setImageSrc(null)
        setPostValue('')
        window.location.reload()
      }else {
        const headers = {
          'Content-Type': 'application/json'
        }
        const file = JSON.stringify({data: imageSrc})
        const uploadResponse = await axios.post('/api/uploads/', file, {headers});
        const bodyInfo = {
          text: postValue,
          nameValue: nameValue,
          userId: idValue,
          color: color,
          tags: getTags, 
          imagePost: [{ url: uploadResponse.data.url, id: uploadResponse.data.id }],
        };
        await axios.post('/api/postCreate', bodyInfo);
        setModal(false);
        setIsCreating(false);
        setImageSrc(null);
        setPostValue('');
        window.location.reload();
      }
    }catch(err){
      setIsCreating(false);
    }
    setIsCreating(false);
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
      <div className="m-3 w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center">
        <AiOutlineForm size={22} className="text-white"/>
      </div>
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
              <div className="max-w-[150px] max-h-[150px] lg:max-w-[250px] lg:max-h-[250px] rounded-lg relative flex items-center justify-center overflow-hidden">
                <div 
                  onClick={() => removeImage()}
                  className="absolute bg-white top-2 right-2 rounded-md " 
                >
                  <AiOutlineClose size={24} className="text-orange-400 cursor-pointer"/>
                </div>
                <img 
                  src={imageSrc} 
                  alt='image'
                  className="w-auto h-auto rounded-lg object-cover object-center" 
                />
              </div>
            )}
            <div className="flex items-center gap-2">
              <div className="w-[30px] h-[30px] overflow-hidden border relative flex items-center justify-center rounded-sm">
                <AiOutlinePicture size={26} className="text-orange-400"/>
                <form method="post"  onChange={handleOnChange} className="absolute top-0 opacity-0 cursor-pointer">
                  <input type="file" name="file" className="cursor-pointer"/>
                </form>
              </div>
            </div>
            <hr />
            <div className="flex items-center gap-2">
              <div 
                onClick={uploadPost}
                className="bg-orange-400 text-white w-1/4 py-2 rounded-lg cursor-pointer flex items-center justify-center" 
              >
                Create
              </div>
              <TagsModal
                getTags={(value) => setGetTags(value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default HeaderDash;