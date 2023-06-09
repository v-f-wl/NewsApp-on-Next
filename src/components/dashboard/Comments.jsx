'use client'
import { useEffect, useState } from "react";
import UserBlock from "./UserBlock";
import {AiOutlineClose} from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid';

import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
const Comments = (
  { isOpen, 
    userId, 
    color, 
    isLoaded,
    authorName, 
    dateString, 
    onClose,
    postId,
    postText,
  }) => {

  const [areaValue, setAreaValue] = useState('')
  const [commentsHandler, setCommentsHandler] = useState()
  const [commentLoaded, setCommentLoaded] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const personId = Cookies.get('id')
  const personName = Cookies.get('name')

  useEffect(() => {
    if(isOpen){
      axios.get(`/api/getComments/?postId=${postId}`)
      .then(res => {
          setCommentsHandler(res.data.comments)
          setCommentLoaded(true)
        }
      )
    }
  }, [isOpen])

  const sendComment =() => {
    if(areaValue.length === 0 || buttonDisabled){
      return
    }
    setButtonDisabled(true)
    const commentInfo = {
      userId: personId,
      text: areaValue,
      name: personName,
      time: new Date()
    }

    axios.post(`/api/addComments/?id=${postId}`, commentInfo)
    .then((res) => {
      setAreaValue('')
      setCommentsHandler(res.data.updatedPost.comments)
      setButtonDisabled(false)
    })
    .catch(() => setButtonDisabled(false))

  }
  const convertDate = (dateValue) => {
    if(!dateValue){
      return ''
    }
    const date = new Date(dateValue);
    const options = { hour: 'numeric', minute: 'numeric', year: 'numeric', month: 'long', day: 'numeric'}
    const editData = date.toLocaleDateString('en-US', options)
    return editData
  }
  const CommentBlock = ({name,userId, time, text}) => (
    <div className="border-l border-orange-400 p-2" key={uuidv4()}>
      <div className="">
        <Link href={`/userprofile/?id=${userId}`} className="font-bold text-md text-slate-500">
          {name}
        </Link>
        <div className="text-xs font-light">{convertDate(time)}</div>
      </div>
      <div className="pt-2 text-md">
        {text}
      </div>
    </div>
  )
  return ( 
    <div className={`${isOpen ? "flex" : "hidden"} fixed top-0 bg-slate-600 bg-opacity-20 left-0 w-full h-full z-20 items-center justify-center`}>
      <div className="h-full w-full lg:w-2/4 lg:max-h-[70vh] p-4 lg:p-8 bg-white lg:rounded-lg flex flex-col gap-4 overflow-y-scroll">
        <div className="flex items-center justify-between">
          <UserBlock
              userId={userId}
              color={color}
              isLoaded={isLoaded}
              authorName={authorName}
              dateString={dateString}
            />
            <div className="cursor-pointer" onClick={onClose}>
              <AiOutlineClose size={24}/>
            </div>
        </div>
        <div className="py-4 text-xl">
          {postText}
        </div>
        <h3 className="font-bold text-slate-600 text-xl">Сomments</h3>
        <div className="h-full overflow-y-scroll flex flex-col gap-4">
          {commentLoaded  ? 
            <>
              {commentsHandler.length == 0 ? 
              ( 
                <div className="font-semibold capitalize text-lg">no comments yet</div>
              ) 
              : 
              (
                commentsHandler.map(item => (
                  <CommentBlock 
                    key={uuidv4()}
                    userId={item.userId}
                    name={item.name}
                    time={item.time}
                    text={item.text}
                  />
                ))
              )
              }
            </>
            :
            <div className="">Loading...</div>
          }
        </div>
        <div className="py-4 border-t flex flex-col gap-2">
          <textarea  
            value={areaValue}
            onChange={(e) => setAreaValue(e.target.value)}
            rows="2" 
            className="p-2 w-full resize-none border rounded-lg outline-none"
          >
          </textarea>
          <div 
            onClick={()=> sendComment()}
            className={`
              ${buttonDisabled ? 'opacity-40' : ''}
              rounded-lg 
              py-4
              px-2 
              flex 
              flex-col 
              items-center 
              justify-center
              bg-orange-400
              text-white
              text-xl
              font-semibold
              cursor-pointer
              `}
            >
              Send
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Comments;