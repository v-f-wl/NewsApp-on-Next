'use client'
import { useEffect, useState } from "react";
import HeaderDash from "./dashboard/HeaderDash";
import PostCard from "./dashboard/PostCard";
import axios from "axios";

const MainDash = () => {
  const [isPostsLoading, setIsPostsLoading] = useState(true)
  const [postsArr, setPosstsArr] = useState(false)

  useEffect(() =>{
    axios.get('/api/postGetAll')
      .then(res => {
        setPosstsArr(res.data.reverse())
      })
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    if(postsArr.length > 0){
      setIsPostsLoading(false)
    }
  }, [postsArr])

  return (  
    <div className="relative overflow-y-scroll rounded-lg lg:rounded-t-xl snap-none">
      <HeaderDash/>
      <div className="flex flex-col gap-4 overflow-hidden pt-4 lg:pt-8">
        {(isPostsLoading ? [...Array(4)] : postsArr)
          .map((item, index) => 
          isPostsLoading ? 
          (<PostCard isLoaded={false} key={index}/>) 
          : 
          (
            <PostCard 
              isLoaded={true} 
              key={item._id} 
              idPost={item._id}
              userId={item.user}
              postText={item.text} 
              authorName={item.name} 
              createdAt={item.createdAt}
              likeCount={item.likesCount}
              likesArr={item.likesUser}
              color={item.color}
              image={item.image}
              comments={item.comments}
              imagePost={item.imagePost}
            />
          )
        )
        }
      </div>
    </div>
  );
}
 
export default MainDash;