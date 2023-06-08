'use client'
import { useEffect, useState } from "react";
import UserBlock from "./UserBlock";
import {AiOutlineClose} from 'react-icons/ai'
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
  const [commentsHandler, setCommentsHandler] = useState([])
  const personId = Cookies.get('id')
  const personName = Cookies.get('name')
  const sendComment =() => {
    if(areaValue.length === 0){
      return
    }
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
    })
    .catch(error => console.log(error))

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
  useEffect(() => {
    if(postId !== undefined && isOpen){
      axios.get(`/api/postGetOne/?id=${postId}`)
      .then(res => {
        if(res.data.comments.length > 0){
          setCommentsHandler([...res.data.comments])
        }
      })
    }
  }, [postId, isOpen])
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
        <hr />
          <h3 className="mt-2 font-bold text-slate-600 text-xl">Сomments</h3>
        <div className="h-auto overflow-y-scroll flex flex-col gap-4">
          {commentsHandler.length > 0 ? 
            (commentsHandler.map((item) => (
              <div className="border rounded-lg p-2" key={item.userId}>
                <div className="">
                  <Link href={`/userprofile/?id=${item.userId}`} className="font-bold text-md text-slate-500">
                    {item.name}
                  </Link>
                  <div className="text-xs font-light">{convertDate(item.time)}</div>
                </div>
                <div className="pt-4 text-lg">
                  {item.text}
                </div>
              </div>
            )))
            :
            (<div className="capitalize">no comments yet</div>)
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
            className="
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
              "
            >
              Send
            </div>
        </div>
      </div>
    </div>
  );
}
 
export default Comments;