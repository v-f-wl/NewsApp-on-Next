'use client'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { HexColorPicker as Picker } from 'react-colorful';
import SettingTitle from './settingTitle';

const ColorModal = ({isOpen}) => {
  const [newColor, setNewColor] = useState('fff')
  const [colorProfile,setColorProfile] = useState('')
  const [userId, setUserId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setColorProfile(Cookies.get('color'))
    setUserId(Cookies.get('id'))
  }, [])

  const changeColor = () => {
    setIsLoading(true)
    axios.patch(`/api/changeColor/?id=${userId}`, 
    {
      colorCode: newColor
    })
    .then(() =>{
      Cookies.set('color', newColor)
      setIsLoading(false)
      isOpen()
      window.location.reload();
    })
    .catch(() => {
      setIsLoading(false)
    })
  }
  return (  
    <div 
      className={`
        relative
        w-[95%]
        lg:w-2/5
        bg-white 
        rounded-lg
        py-8
        px-4 
        overflow-hidden
      `}
    >
    <div 
      className={`
        ${isLoading ? "block" : "hidden"}
        absolute
        inset-0
        bg-slate-400 
        bg-opacity-60
        z-20
        flex
        items-center
        justify-center
      `}
    >
      <div className="w-8 h-8 rounded-lg animate-spin border"></div>
    </div>
      <SettingTitle title="Choose a color"/>
      <div className="mt-8 flex justify-center gap-4">
        <Picker color={newColor} onChange={setNewColor}/>
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 items-center">
            <span className="">Your color:</span>
            <div style={{backgroundColor: colorProfile}} className='w-[30px] h-[30px] rounded-lg border'>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="">New color:</span>
            <div style={{backgroundColor: newColor}} className='w-[30px] h-[30px] rounded-lg border'>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-4 ">
        <div onClick={()=>isOpen()} className="border-2 py-2 px-4 rounded-lg cursor-pointer transition hover:border-slate-900">Cancel</div>
        <div onClick={() => changeColor()} className="bg-orange-400 text-white py-2 px-4 rounded-lg cursor-pointer hover:opacity-70">Change</div>
      </div>
    </div>
  );
}
 
export default ColorModal;