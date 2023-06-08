'use client'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { AiOutlineMore, AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'
import { CiCircleMinus } from 'react-icons/ci'
import UserBlock from './UserBlock';
import Comments from './Comments';

const PostCard = ({isLoaded, postText, authorName, createdAt, color, userId, idPost, likesArr, comments}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isRemove, setIsRemove] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCounts, setLikeCounts] = useState()
  const [commentsCount, setCommentsCount] = useState()
  const [commentOpen, setCommentOpen] = useState(false)

  const createData = new Date(createdAt)
  const options = { hour: 'numeric', minute: 'numeric', year: 'numeric', month: 'long', day: 'numeric'};
  const dateString = createData.toLocaleDateString('en-US', options);
  const profileId = Cookies.get('id')

  const menu = (event) => {
    if(isMenuOpen && !event.target.closest('.pin')){
      setIsMenuOpen(false)
    }else{
      setIsMenuOpen(true)
    }
  }

  const removePost = () =>{
    axios.delete(`/api/postRemove/?id=${idPost}`)
    .then(res => {
      setIsHidden(true)
    })
    .catch(err => console.log(err))

  }
  const changeLikeCount = () => {
    if(isLiked){
      axios.patch(`/api/postLikeTarger/?id=${idPost}`, {userId: profileId})
      .then(res => {
        setLikeCounts(prev => prev - 1)
        setIsLiked(false)
      })
    }else{
      axios.patch(`/api/postLikeTarger/?id=${idPost}`, {userId: profileId})
      .then(res => {
        setLikeCounts(prev => prev + 1)
        setIsLiked(true)
      })
    }
  }
  useEffect(() => {
    if(userId !== undefined && userId === profileId){
      setIsRemove(true)
    }
    if(likesArr !== undefined){
      setLikeCounts(likesArr.length)
      if(likesArr.indexOf(profileId) !== -1){
        setIsLiked(true)
      }
    }
    if(comments !== undefined){
      setCommentsCount(comments.length)
    }
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-container') || event.target.closest('.pin')) {
        setIsMenuOpen(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])
  return ( 
    <div className={`${isHidden ? 'hidden' : ''} p-4 bg-white rounded-lg flex flex-col gap-4`}>
      <Comments
        onClose={() => setCommentOpen(false)}
        isOpen={commentOpen}
        userId={userId}
        color={color}
        postText={postText}
        isLoaded={isLoaded}
        authorName={authorName}
        dateString={dateString}
        postId={idPost}
        comment={comments}
      />
      <div className="flex items-center justify-between">
        <UserBlock
          userId={userId}
          color={color}
          isLoaded={isLoaded}
          authorName={authorName}
          dateString={dateString}
        />
        <div className={`${isRemove ? 'flex' : 'hidden'}  relative menu-container z-0`} onClick={(e) => menu(e)} >
          <AiOutlineMore size={22}/>
          <div 
            className={`
              ${isMenuOpen ? "visible" : "invisible"}
              ${isMenuOpen ? "top-10" : "top-0"}
              py-3
              px-2
              right-0
              absolute 
              border 
              rounded-lg
              w-[140px]
              bg-white
              shadow-md 
            shadow-slate-400/10
            `}
            >
              <ul 
                className={`flex flex-col`}>
                <li 
                  onClick={() => removePost()}
                  className={`
                    pin
                    relative
                    z-20
                    pin
                    flex 
                    items-center 
                    gap-2 
                    cursor-pointer
                  `}
                >
                  {isRemove ? 
                    (
                      <>
                        <CiCircleMinus size={24}/>
                        <span className="">Remove</span>
                      </>
                    ) 
                    : 
                    null
                  }
                </li>
              </ul>
          </div>
        </div>
      </div>
      <div 
        className={`
          ${isLoaded ? '' : 'h-[50px]'}
          ${isLoaded ? '' : 'animate-pulse'}
          ${isLoaded ? '' : 'bg-slate-300'}
          ${isLoaded ? '' : 'rounded-lg'}

          text-sm 
          lg:text-xl
          tracking-wide
        `}
      >
        {postText}
      </div>
      {isLoaded ? 
        (
          <div 
            className={`${profileId ? 'flex' : 'hidden'} items-center gap-5`}
          >
            <div 
              onClick={() => changeLikeCount()}
              className="px-2 py-2 border flex items-center gap-2 rounded-full cursor-pointer"
            >
              <AiOutlineHeart 
                size={24} 
                className={`${isLiked ? "text-red-500" : "text-slate-400"}`}
              />
              <span className='text-slate-800'>{likeCounts}</span>
            </div>
            <div 
              className="px-2 py-2 border flex items-center gap-2 rounded-full cursor-pointer"
              onClick={() => setCommentOpen(true )}
            >

              <AiOutlineComment size={24} className='text-slate-400'/>
              <span className='text-slate-800'>{commentsCount}</span>
            </div>
          </div>
        ) 
        : 
        (
          <div 
            className="animate-pulsew-[100px]h-[40px]rounded-lg bg-slate-300"
          >
          </div>
        )
      }
    </div>
  );
}
 
export default PostCard;