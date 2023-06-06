'use client'

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import PostCard from '../components/dashboard//PostCard'
import axios from 'axios'
import HeaderName from "./profileMail/HeaderName";
import ProfileTitle from "./profileMail/ProfileTitle";
const ProfileMain = () => {

  const router = useRouter()
  const { id } = router.query
  const [post, setPost] = useState()
  const [name, setName] = useState('')
  const [profileColor, setProfileColor] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)
  const cookies = Cookies.get('id')
  useEffect(() => {
    if(cookies !== id && id !== undefined){
      router.push('/authpage')
    }
    setProfileColor(Cookies.get('color'))
    setName(Cookies.get('name'))
    axios.get('/api/posrOfOneUser', {
      params: {
        idPerson: id
      }
    })
    .then(res => {
      setPost(res.data.reverse())
    })
    .catch(error => console.log(error))
    setIsLoaded(true)
  }, [id, cookies])
  const PinCard = () => (
    <div className="border-b p-2" >
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
    <div 
      className={`
        ${isLoaded ? 'flex':'hidden'}
        ${isLoaded ? 'lg:block':'hidden'}
        flex-col 
        gap-4 
        h-full
      `}
      >
      <HeaderName
        profileColor={profileColor}
        name={name}
      />
      <div className="lg:mt-10 lg:grid lg:grid-cols-32 lg:gap-12 lg:items-start h-full">
        <div className="bg-white rounded-lg py-4 lg:py-8 px-2 lg:px-4">
          <ProfileTitle title='your posts'/>

          {post ? 
          (
            <div className="mt-4 flex flex-col gap-3 max-h-[70vh] overflow-y-scroll">
              {post.map((item) => (
                <PostCard
                  key={item._id}
                  isLoaded={true}
                  userId={item.user}
                  postText={item.text}
                  idPost={item._id}
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
          <ProfileTitle title='your pins'/>
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