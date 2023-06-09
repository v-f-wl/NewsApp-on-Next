'use client'
import { useState } from 'react';
import axios from 'axios';


export default function Home() {
  const [imageSrc, setImageSrc] = useState('');

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      const newImageSrc = onLoadEvent.target.result;
      setImageSrc(newImageSrc);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  const uploadValue = async () => {
    console.log(imageSrc)
    try {
      const headers = {
        'Content-Type': 'application/json'
      }
      const file = JSON.stringify({data: imageSrc})
      axios.post("/api/uploads/", file, {headers})
      .then(res => {
        console.log(res.data)
      })
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="hidden lg:block">
      <img src={imageSrc} alt="" />
      <form onChange={handleOnChange}>
        <input type="file" name="file"/>
      </form>
      <button onClick={uploadValue} className='border p-3 mt-4'>send</button>
    </div>
  );
}