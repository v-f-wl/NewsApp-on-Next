'use client'
import { useRouter } from "next/router";
import PostCard from "../dashboard/PostCard";
import ProfileTitle from "../profileMail/ProfileTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter as useRouterNav } from "next/navigation";

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
    <div className="bg-white lg:rounded-lg p-4 max-h-[70vh] overflow-y-scroll">
      <ProfileTitle title="Posts"/>
      <div className="mt-4 flex flex-col gap-2 ">
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
          <>
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
                />
            ))}
          </>
        }
        {/* {!isLoaded ? 
            <>
              <PostCard
                isLoaded={false}
              />
              <PostCard
                isLoaded={false}
              />
            </>
          :
          userInfo 
          ? 
          <>
            (userInfo.map((if) => (

            <PostCard
              isLoaded={true}
              postText='kk skdn nskndvl sld'
              authorName='kdsvmls lskdnvlks'
              createdAt
              color='red'
            />
            )))
          </>
        } */}
      </div>
    </div>  
  );
}
 
export default UserWalls;