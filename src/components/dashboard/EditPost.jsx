'use client'

import axios from "axios";
import { useState } from "react";

const EditPost = ({openEdit, postText, onClose, editedText, posrId}) => {

  const [postValue, setPostValue] = useState(postText)
  const [isLoaded, setIsLoaded] = useState(false)

  const setEdit = () => {
    setIsLoaded(true)
    axios.patch('/api/postEdit', {
      postId: posrId,
      editedText: postValue
    }).then(() => {
      onClose()
      setIsLoaded(false)
      editedText(postValue)
    })
  }
  return (  
    <div className={`${openEdit ? "flex" : "hidden"} fixed top-0 lg:bg-slate-600 lg:bg-opacity-20 left-0 w-full h-full z-20 items-center justify-center`}>
      <div className="h-full w-full lg:w-2/4 lg:h-auto lg:max-h-[70vh] p-4 lg:p-8 bg-slate-600 lg:bg-white bg-opacity-20 lg:rounded-lg flex flex-col gap-4 overflow-y-scroll justify-center">
        {isLoaded ? 
          (
            <div className="w-full h-[250px] bg-white border flex items-center justify-center rounded-lg font-semibold text-xl">
              Please Wait..
            </div>
          )
          :
          <textarea 
          className="w-full h-[250px] resize-none text-xl font-medium p-2 lg:p-4 outline-none border border-orange-400 rounded-lg"
          value={postValue}
          onChange={(e) => setPostValue(e.target.value)}
          >
          </textarea>
        }
        {/* <textarea 
          className="w-full h-[250px] resize-none text-xl font-medium p-2 lg:p-4 outline-none border border-orange-400 rounded-lg"
          value={postValue}
          onChange={(e) => setPostValue(e.target.value)}
        >
        </textarea> */}
        <div className="flex items-center gap-2">
          <div onClick={onClose} className="cursor-pointer bg-white font-semibold text-lg py-3 px-2 lg:border rounded-lg">Cancel</div>
          <div onClick={setEdit} className="cursor-pointer font-semibold text-lg py-3 px-5 bg-orange-400 text-white rounded-lg">Edit</div>
        </div>
      </div>
    </div>
  );
}
 
export default EditPost;