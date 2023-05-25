'use client'
import { useEffect, useState } from "react";
import HeaderDash from "./dashboard/HeaderDash";
import PostCard from "./dashboard/PostCard";
import axios from "axios";

const MainDash = () => {
  const [isPostsLoading, setIsPostsLoading] = useState(true)
  const [postsArr, setPosstsArr] = useState([])

  useEffect(() =>{
    axios.get('https://63e261b53e12b193763ea4e8.mockapi.io/group')
      .then(res => [setPosstsArr(res.data)])

  }, [])
  useEffect(() => {
    axios.get('/api/postGetAll').then(res => console.table(res.data))
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
        {(isPostsLoading ? [...Array(2)] : postsArr).map((item, index) => 
          isPostsLoading ? 
          (<PostCard isLoaded={false} key={index}/>) 
          : 
          (
            <PostCard isLoaded={true} key={item.id} postText={item.text} authorName={item.name} image={item.image}/>
          )
        )
        }
      </div>
    </div>
  );
}
 
export default MainDash;