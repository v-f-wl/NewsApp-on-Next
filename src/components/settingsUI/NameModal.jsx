'use client'
import { useState } from "react";
import SettingTitle from "./SettingTitle";
import axios from "axios";
import Cookies from "js-cookie";

const NameModal = ({isOpen}) => {
  const [nameValue, setNameValue] = useState('')
  const [validNumber, setValidNumber] = useState(true)
  const [validLength, setValidLength] = useState(true)
  const [loadingModal, setModalingModal] = useState(false)
  const userId = Cookies.get('id')


  const checkIsNumber = (str) =>{
    for (let i = 0; i < str.length; i++) {
      if (/[0-9]/.test(str[i])) {
        setValidNumber(false)
        setModalingModal(false)
        return false;
      }
    }
    return true;
  }
  const isValud = (str) => {
    if(str.length < 8){
      setValidLength(false)
      setModalingModal(false)
      return false
    }
    return true
  }
  const changeName = (str)=> {
    if(checkIsNumber(str) && isValud(str)){
      setModalingModal(true)
      axios.patch(`/api/changeName/?id=${userId}`, {nameValue : nameValue})
      .then(res => console.log(res.data))
      Cookies.set('name', nameValue)
      isOpen()
      window.location.reload();
      setModalingModal(false)
    }
  }
  return (  
    <div className="py-8 px-4 w-[95%] lg:w-2/5 rounded-lg overflow-hidden bg-white flex flex-col gap-4">
      <div className={`${loadingModal ? 'flex' : 'hidden'} absolute inset-0 z-20 bg-slate-400 bg-opacity-60 items-center justify-center`}>
        <div className="w-8 h-8 border border-white rounded-lg animate-spin"></div>
      </div>
      <SettingTitle title='Write The Name'/>
      <div 
        className='text-center capitalize flex flex-col items-center'
      >
          <span className={`${validNumber ? 'text-slate-600' : 'text-red-400'}`}>should not contain any numbers</span>
          <span className={`${validLength ? 'text-slate-600' : 'text-red-400'}`}>minimum character count is 8</span>
      </div>
      <div className="text-center">
        <input 
          onChange={(e) => setNameValue(e.target.value)}
          value={nameValue}
          type="text" 
          className={`
            border 
            py-3 
            px-2 
            rounded-lg 
            capitalize
            outline-none
          `}
          />
      </div>
      <div className="mt-4 flex justify-center gap-4 ">
        <div onClick={()=> isOpen()} className="border-2 py-2 px-4 rounded-lg cursor-pointer transition hover:border-slate-900">Cancel</div>
        <div onClick={() => changeName(nameValue)} className="bg-orange-400 text-white py-2 px-4 rounded-lg cursor-pointer hover:opacity-70">Change</div>
      </div>
    </div>
  );
}
 
export default NameModal;