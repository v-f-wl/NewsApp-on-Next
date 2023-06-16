'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import ColorModal from "./ColorModal";
import SettingModal from "./SettingModal";
import NameModal from "./NameModal";

const SettingsContainer = () => {
  const [modalColor, setModalColor] = useState(false)
  const [modalName, setModalName] = useState(false)
  const [modalFeedBack, setModalFeedBack] = useState(false)
  const getId = Cookies.get('id')
  const router = useRouter()

  useEffect(() => {
    if(!getId){
      router.push('/')
    }
  }, [getId, router])
  const logOut = () => {
    Cookies.remove('name')
    Cookies.remove('id')
    Cookies.remove('token')
    Cookies.remove('color')
    window.location.reload();
  }
  return ( 
    <div className="rounded-lg lg:rounded-t-lg bg-white px-4 py-8">
      <h2 className="font-bold text-3xl text-slate-700">
        Settings
      </h2>

      <div className="mt-4 flex flex-col gap-6">
        <div 
          onClick={() => setModalColor(true)}
          className="cursor-pointer border-l-2 border-orange-400 px-2"
        >
          Change Avatar Color
        </div>
        <div 
          onClick={() => setModalName(true)}
          className="cursor-pointer border-l-2 border-orange-400 px-2"
        >
          Change Name
        </div>
        <div className="text-orange-400 cursor-pointer" onClick={logOut}>
          Log Out
        </div>
      </div>
      <SettingModal
        isOpen={modalColor}
      >
        <ColorModal
          isOpen = {() => {setModalColor(false)}}
        />
      </SettingModal>
      <SettingModal
        isOpen={modalName}
      >
        <NameModal
          isOpen = {() => {setModalName(false)}}
        />
      </SettingModal>
    </div>
  );
}
 
export default SettingsContainer;