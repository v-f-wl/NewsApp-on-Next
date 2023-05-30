'use client'

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import {AiOutlineHeart, AiOutlineSend } from 'react-icons/ai'
import { useRouter } from 'next/router';
import PostCard from '../components/dashboard//PostCard'
import axios from 'axios'
const ProfileMain = () => {

  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState()
  const [name, setName] = useState('')
  const [profileColor, setProfileColor] = useState('')

  useEffect(() => {
    setProfileColor(Cookies.get('color'))
    setName(Cookies.get('name'))
  }, []);

  useEffect(() => {
    axios.get('/api/posrOfOneUser', {
      params: {
        idPerson: id
      }
    })
    .then(res => {
      setPost(res.data.reverse())
    })
    .catch(error => console.log(error))
  }, [id])
  const Title = ({value}) => (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-xl lg:text-2xl capitalize text-slate-500">
        {value}
      </h2>
      <hr />
    </div>
  )
  const PinCard = () => (
    <div className="border-b p-2">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-slate-200 rounded-lg"></div>
        <span className="text-slate-600 font-light text-md">Tristan Arr</span>
      </div>
      <div className="mt-4">
      Lorem ipsum dolor sit amet. Aut natus suscipit sed omnis iste sed officia totam. Ut tenetur ducimus et voluptate adipisci sit aliquam voluptas
      </div>
    </div>
  )
  return ( 
    <div className="flex flex-col gap-4 lg:block h-full">
      <div className="bg-white rounded-lg flex items-center gap-2 p-3 lg:p-5">
        <div style={{ backgroundColor: profileColor}} className="w-8 h-8 lg:w-14 lg:h-14 rounded-lg"></div>
        <span className="font-semibold text-2xl lg:text-3xl text-slate-700 tracking-wide">{name}</span>
      </div>
      <div className="lg:mt-10 lg:grid lg:grid-cols-32 lg:gap-12 lg:items-start">
        <div className="bg-white rounded-lg py-4 lg:py-8 px-2 lg:px-4">
          <Title value='your posts'/>

          {post ? 
          (
            <div className="mt-4 flex flex-col gap-3 max-h-[60vh] overflow-y-scroll">
              {post.map((item) => (
                <PostCard
                  key={item._id}
                  isLoaded={true}
                  postText={item.text}
                  authorName={name}
                  createdAt={item.createdAt}
                  color={item.color}
                />
              ))}
            </div>
          ) 
          : 
          (
            <div className="pt-10 text-xl font-light text-slate-300">
              *You don't have any posts yet
            </div> 
          )
          }
        </div>
        <div className="hidden lg:block bg-white rounded-lg py-8 px-4">
          <Title value='your pins'/>
          {post ? 
          (
            <div className=" mt-4 flex flex-col gap-4 max-h-[50vh] overflow-y-scroll">
              <PinCard/>
              <PinCard/>
              <PinCard/>
              <PinCard/>
              <PinCard/>
              <PinCard/>
            </div>
          ) 
          : 
          (
            <div className="pt-10 text-xl font-light text-slate-300">
              *You haven't added any pins yet
            </div> 
          )
          }
        </div>
      </div>
    </div>
  );
}
 
export default ProfileMain;