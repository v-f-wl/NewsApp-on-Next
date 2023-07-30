'use client'
import { useEffect, useState } from 'react';
import { AiOutlineMore, AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'
import { CiCircleMinus, CiEdit } from 'react-icons/ci'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Cookies from 'js-cookie';

import UserBlock from './UserBlock';
import Comments from './Comments';
import EditPost  from './EditPost';

const PostCard = ({
  isLoaded, 
  postText, 
  authorName, 
  createdAt, 
  color, 
  userId, 
  idPost, 
  likesArr, 
  comments, 
  imagePost, 
  tags, 
  selectTag}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isRemove, setIsRemove] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCounts, setLikeCounts] = useState()
  const [commentsCount, setCommentsCount] = useState()
  const [commentOpen, setCommentOpen] = useState(false)

  const [textPost, setTextPost] = useState(postText)
  const [editOpen, setEditOpen] = useState(false)

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
    .then(() => {
      setIsHidden(true)
    })
    .catch(err => console.log(err))

  }
  
  const changeLikeCount = () => {
    if(isLiked){
      axios.patch(`/api/postLikeTarger/?id=${idPost}`, {userId: profileId})
      .then(() => {
        setLikeCounts(prev => prev - 1)
        setIsLiked(false)
      })
    }else{
      axios.patch(`/api/postLikeTarger/?id=${idPost}`, {userId: profileId})
      .then(() => {
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
  }, [comments, likesArr, profileId, userId])

  
  return ( 
    <div className={`${isHidden ? 'hidden' : ''} p-2 md:p-4 bg-white rounded-lg flex flex-col gap-4`}>
      <EditPost
        openEdit={editOpen}
        postText={postText}
        editedText={(value) => setTextPost(value)}
        onClose={() => setEditOpen(false)}
        posrId={idPost}
      />
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
        imagePost={imagePost}
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
              ${isMenuOpen ? "top-10" : "top-8"}
              transition-all
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
                className={`flex flex-col gap-2`}>
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
                  <div className="flex items-center gap-1">
                    <CiCircleMinus size={24}/>
                    <span className="">Remove</span>
                  </div>
                </li>
                <li
                  onClick={() =>setEditOpen(true)}
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
                  <div className="flex items-center gap-1">
                      <CiEdit size={24}/>
                      <span className="">Edit</span>
                    </div>
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
        {textPost}

      </div>
      <div className="">
        {tags && (
          <div className="flex items-center flex-wrap gap-2">
            {tags.map(item => (
              <div 
                key={uuidv4()}
                onClick={() => selectTag(item)}
                className="text-sm cursor-pointer text-slate-400 lg:hover:text-orange-400 lg:transition"
              >
                #{item}
              </div>
            ))}
          </div>
        )}
      </div>
      {
        isLoaded &&
        <>
          {imagePost.length > 0 ? (
            <div className="flex justify-center">
            {imagePost.map(item => (
                <div key={item.id} className=" max-w-[290px] max-h-[290px] lg:max-w-[350px] lg:max-h-[350px] flex items-center justify-center rounded-lg overflow-hidden">
                  <img 
                    key={`${item.id}1fd2a`} 
                    src={item.url} 
                    alt="Description of the image" 
                    className='w-auto h-auto rounded-lg object-cover object-center'
                  />
                </div>
            ))
            }
            </div>)
            : 
          (null)
          }
        </>
      }
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
              onClick={() => setCommentOpen(true )}
              className="px-2 py-2 border flex items-center gap-2 rounded-full cursor-pointer"
              >

              <AiOutlineComment size={24} className='text-slate-400'/>
              <span className='text-slate-800'>{commentsCount}</span>
            </div>
          </div>
        ) 
        : 
        (
          <div className="animate-pulsew-[100px]h-[40px]rounded-lg bg-slate-300">
          </div>
        )
      }
    </div>
  );
}
 
export default PostCard;