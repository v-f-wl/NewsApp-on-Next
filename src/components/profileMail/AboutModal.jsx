'use client'

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import Label from "./Label";
import ProfileTitle from "./ProfileTitle";

const AboutModal = ({isModals, closeModals, valueHobbies, valueCity, valueAge}) => {
  const [dataValue, setDataValue] = useState({
    city: null,
    age: null,
    hobbies: null
  })
  const outModal = useRef()
  const btnModal = useRef()
  
  useEffect(() => {
    let newData = {...dataValue}
    newData = {
      city: valueCity,
      age: valueAge,
      hobbies: valueHobbies
    }
    setDataValue(newData)
  }, [valueHobbies, valueCity, valueAge])
  
  const idUser = Cookies.get('id')

  const closeModal = (event) => {
    const element = event.target
    if(element === outModal.current || element === btnModal.current){
      closeModals()  
    }
  }

  const onSubmit = () => {
    const newData = JSON.parse(JSON.stringify(dataValue))
    axios.patch(`/api/changeAboutValue/?id=${idUser}`, newData)
    .then(() => {
      console.log('dvdf')
      window.location.reload()
      closeModals()
    })
    .catch((error) => {
      console.log(error, 'error')
    })
  }

  return (  
    <div 
      ref={outModal}
      onClick={(e) => closeModal(e)}
      className={`${isModals ? 'block' : 'hidden'} fixed inset-0 bg-slate-400 bg-opacity-40 flex items-center justify-center`}
    >
      <div className="bg-white rounded-lg py-6 px-4">
        <ProfileTitle title='Edit About Value'/>
        <div className="mt-4 flex flex-col gap-2">
          <form>
            <Label 
              newValue={dataValue.city} 
              setValue={(value) => setDataValue(value)} 
              id='city' 
              type='text' 
              label='City'
            />
            <Label 
              newValue={dataValue.age} 
              setValue={(value) => setDataValue(value)} 
              id='age' 
              type='number' 
              label='Age'
            />
            <Label 
              newValue={dataValue.hobbies} 
              setValue={(value) => setDataValue(value)} 
              id='hobbies' 
              type='text' 
              label='Hobbies'
            />
          </form>
        <div className="flex gap-4">
          <div 
            onClick={onSubmit}
            className='bg-orange-400 text-white
              py-2 px-4 hover:opacity-40 transition-opacity
              flex items-center justify-center text-lg font-semibold rounded-lg cursor-pointer'
          >
              Save
          </div>
            <div 
              onClick={(e) => closeModal(e)}
              ref={btnModal}
              className='border
                py-2 px-4 hover:opacity-40 transition-opacity
                flex items-center justify-center text-lg font-semibold rounded-lg cursor-pointer'
            >
              Back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AboutModal;