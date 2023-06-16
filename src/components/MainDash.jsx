'use client'
import { useEffect, useState } from "react";
import axios from "axios";

import HeaderDash from "./dashboard/HeaderDash";
import PostCard from "./dashboard/PostCard";
import TagsInfo from "./dashboard/TagsInfo";


const MainDash = () => {
  const [isPostsLoading, setIsPostsLoading] = useState(true)
  const [posts, setPosts] = useState([]);
  const [modalError, setModalError] = useState(false)
  const [selectedTag, setSelectedTag] = useState('')
  const [filteredData, setFilteredData] = useState(posts)

  useEffect(() => {
    if(selectedTag === ''){
      return
    }
    const newArr = [...posts]
    const filteredData = newArr.filter(post => post.tags.includes(selectedTag))
    setFilteredData(filteredData)
  }, [selectedTag, posts])

  const getPost = async () => {
    setIsPostsLoading(true)
    setModalError(false)
    try {
      const posts  = await axios.get('/api/postGetAll')
      setPosts(posts.data.reverse())
      setFilteredData(posts.data)
      setIsPostsLoading(false)
    } catch (error) {
      setModalError(true)
    }
  }

  useEffect(() => {
    getPost()
  }, []);

  const creatTag = () => {
    setSelectedTag('')
    setFilteredData(posts)
  }
  return (  
    <div className="relative overflow-y-scroll rounded-lg lg:rounded-t-xl snap-none">
      {selectedTag === ''  ? 
        <HeaderDash/>
        :
        (
          <TagsInfo
            value={selectedTag}
            clearTag={() => creatTag()}
          />
        )
      }
      <div className="flex flex-col gap-4 overflow-hidden pt-4 lg:pt-8 pb-14">
        {modalError && (
          <div 
            className="
              absolute 
              inset-0 
              bg-white 
              rounded-t-lg 
              z-50 flex 
              flex-col 
              items-center 
              justify-center 
              gap-2"
          >
            <div className=" text-xl font-semibold">
              Something went wrong...
            </div>
            <div 
              onClick={() => getPost()}
              className="inline-block py-3 px-2 bg-orange-400 text-white rounded-lg cursor-pointer"
            >
                Try Again
            </div>
          </div>
        )}
        {(isPostsLoading ? [...Array(4)] : filteredData)
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
              tags={item.tags}
              selectTag={(value) => setSelectedTag(value)}
            />
          )
        )
        }
      </div>
    </div>
  );
}
 
export default MainDash;