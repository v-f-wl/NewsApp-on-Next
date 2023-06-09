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
    axios.get('/api/postOfOneUser', {
      params: {
        idPerson: id
      }
    })
    .then(res => {
      if(res.data.length !== 0){
        setPost(res.data.reverse())
      }
    })
    .catch(error => console.log(error))
    setIsLoaded(true)
  }, [id, cookies, router])
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
      <div className="lg:mt-10 lg:grid lg:grid-cols-32 lg:gap-12 lg:items-start lg:h-auto">
        <div className="bg-white rounded-lg py-4 lg:py-8 px-2 lg:px-4">
          <ProfileTitle title='your posts'/>

          {post ? 
          (
            <div className="mt-4 flex flex-col gap-3 h-[50vh] lg:max-h-[70vh] overflow-y-scroll ">
              {post.map((item) => (
                <PostCard
                  key={item._id}
                  isLoaded={true}
                  userId={item.user}
                  postText={item.text}
                  idPost={item._id}
                  authorName={name}
                  likesArr={item.likesUser}
                  createdAt={item.createdAt}
                  color={item.color}
                  comments={item.comments}
                  imagePost={item.imagePost}
                />
              ))}
            </div>
          ) 
          : 
          (
            <div className="pt-10 text-xl font-light text-slate-300">
              *You don&apos;t have any posts yet
            </div> 
          )
          }
        </div>
      </div>
    </div>
  );
}
 
export default ProfileMain;