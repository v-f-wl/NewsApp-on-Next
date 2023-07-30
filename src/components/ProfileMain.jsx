'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axios from 'axios'
import Cookies from "js-cookie";

import PostCard from '../components/dashboard//PostCard'
import HeaderName from "./profileMail/HeaderName";
import ProfileTitle from "./profileMail/ProfileTitle";
import AboutInfo from "./profileMail/AboutInfo";

const ProfileMain = () => {
  const [post, setPost] = useState()
  const [name, setName] = useState('')
  const [profileColor, setProfileColor] = useState('')

  const [isOpenAbout, setIsOpenAbout] = useState(false)
  const [cityValue, setCityValue] = useState(null)
  const [ageValue, setAgeValue] = useState(null)
  const [hobbiesValue, setHobbies] = useState(null)

  const [aboutValue, setAboutValue] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const router = useRouter()
  const { id } = router.query
  const cookies = Cookies.get('id')

  useEffect(() => {
    if(cookies !== id && id !== undefined){
      router.push('/authpage')
    }
    axios.get(`/api/userGetOne/?userId=${id}`)
    .then((res) => {
      setCityValue(res.data.city)
      setAgeValue(res.data.age)
      setHobbies(res.data.hobbies)
      setName(res.data.fullName)
      setProfileColor(res.data.avatar)
    })
    .then(() => {
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
  
    })
    .catch((err) => console.log(err))
    setAboutValue(true)
    setIsLoaded(true)
  }, [id, cookies, router])
  return ( 
    <div 
      className={`
        ${isLoaded ? 'flex':'hidden'}
        ${isLoaded ? 'lg:block':'hidden'}
        flex-col 
        gap-4 
        max-h-[85vh]  
        lg:max-h-[90vh] 
        snap-none
      `}
      >
      <HeaderName
        profileColor={profileColor}
        name={name}
        isOpenModal={() => setIsOpenAbout(isOpenAbout => isOpenAbout = !isOpenAbout)}
      />
      <div 
        className="
          lg:mt-10 
          lg:grid 
          lg:grid-cols-32 
          lg:gap-12 
          lg:items-start 
          lg:h-auto
          
          "
        >
        <div 
          className="
            bg-white 
              rounded-lg 
              py-4 lg:py-8 
              px-2 lg:px-4
            "
          >
          <ProfileTitle title='your posts'/>
          {post ? 
          (
            <div 
              className="
                mt-4 
                flex 
                flex-col 
                gap-3 
                max-h-[60vh]
                overflow-y-scroll
              "
            >
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
                  tags={item.tags}
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
        <AboutInfo 
          isOpen={isOpenAbout}
          isPerson={aboutValue} 
          city={cityValue} 
          age={ageValue} 
          hobbies={hobbiesValue}/>
      </div>
    </div>
  );
}
 
export default ProfileMain;