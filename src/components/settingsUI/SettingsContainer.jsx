'use client'
import { useEffect, useState } from "react";
import ColorModal from "./ColorModal";
import SettingModal from "./SettingModal";
import NameModal from "./NameModal";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Feedback from "./Feedback";
import axios from "axios";

const SettingsContainer = () => {
  const [modalColor, setModalColor] = useState(false)
  const [modalName, setModalName] = useState(false)
  const [modalFeedBack, setModalFeedBack] = useState(false)
  const getId = Cookies.get('id')
  const router = useRouter()

  useEffect(() => {
    axios.post('/api/update')
    .then((res) => console.log(res.data))
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
        <div 
          onClick={() => setModalFeedBack(true)}
          className="cursor-pointer border-l-2 border-orange-400 px-2"
        >
          Здесь можно оставить отзыв
        </div>
        <div className="text-orange-400 cursor-pointer" onClick={logOut}>
          Log Out
        </div>
      </div>
      <SettingModal
        isOpen={modalColor}
      >
        <ColorModal
          isOpen = {() => {
            setModalColor(false)
          }}
        />
      </SettingModal>
      <SettingModal
        isOpen={modalName}
      >
        <NameModal
          isOpen = {() => {
            setModalName(false)
          }}
        />
      </SettingModal>
      <SettingModal
        isOpen={modalFeedBack}
      >
        <Feedback
          isOpen = {() => {
            setModalFeedBack(false)
          }}
        />
      </SettingModal>
    </div>
  );
}
 
export default SettingsContainer;