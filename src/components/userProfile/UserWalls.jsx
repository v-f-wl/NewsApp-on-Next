'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRouter as useRouterNav } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

import ProfileTitle from "../profileMail/ProfileTitle";
import PostCard from "../dashboard/PostCard";
import AboutInfo from "../profileMail/AboutInfo";

const UserWalls = () => {
  
  const router = useRouter()
  const routerTwo = useRouterNav()
  const { id } = router.query
  const [userInfo, setUserInfo] = useState()
  const [isLoaded, setIsLoaded] = useState(false)
  const personId = Cookies.get('id')

  useEffect(() => {
    if(personId === id){
      routerTwo.push(`/profilepage?id=${id}`)
    }
    if(id){
      axios.get('/api/postOfOneUser', {
        params: {
          idPerson: id
        }
      })
      .then(res => {
        setUserInfo(res.data.reverse())
        setIsLoaded(true)
      })
      .catch(error => console.log(error))
    }
  }, [id, personId, routerTwo])
  return ( 
    <div className="lg:mt-10 lg:grid lg:grid-cols-32 lg:gap-12 lg:items-start lg:h-auto">
      <div className="bg-white rounded-lg py-4 lg:py-8 px-2 lg:px-4">
        <ProfileTitle title="Posts"/>
        <div className="">
          {!isLoaded ? 
            (<>
              <PostCard
                isLoaded={false}
              />
              <PostCard
                isLoaded={false}
              />
            </>) 
            :
            <div className="max-h-[60vh] overflow-y-scroll mt-4 flex flex-col gap-2 ">
              {userInfo.map((item) => (
                  <PostCard
                    isLoaded={true}
                    key={item._id}
                    postText={item.text}
                    idPost={item._id}
                    userId={item.user}
                    likesArr={item.likesUser}
                    authorName={item.name}
                    createdAt={item.createdAt}
                    color={item.color}
                    comments={item.comments}
                    imagePost={item.imagePost}
                  />
              ))}
            </div>
          }
        </div>
      </div>
        <AboutInfo
        />
    </div>  
  );
}
 
export default UserWalls;