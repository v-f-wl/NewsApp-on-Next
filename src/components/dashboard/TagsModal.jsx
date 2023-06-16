'use client'

import { useState } from "react";
import { AiOutlineCloseCircle} from 'react-icons/ai'

import tags from '../../tagData/index'
import Tags from "./Tags";

const TagsModal = ({getTags}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [tagsValue, setTagsValue] = useState([])

  const toggleTag = (value) => {
    if(tagsValue.indexOf(value) === -1 && tagsValue.length <= 4){
      const newArr = [...tagsValue, value]
      setTagsValue(newArr)
    }else{
      const newArr = tagsValue.filter(item => item !== value)
      setTagsValue(newArr)
    }
  }

  const addTag = () => {
    getTags(tagsValue)
    setModalOpen(false)
  }

  return ( 
    <div className="w-full">
      <div 
        onClick={() => setModalOpen(true)} 
        className="cursor-pointer w-1/4 py-2 rounded-lg flex items-center justify-center border"
      >
        Add tags
      </div>
      <div 
        className={`
          ${modalOpen ? 'top-0' : '-top-[800px]'} 
          absolute 
          left-0
          bg-white
          z-40 
          w-full 
          h-full 
          transition-all
          py-8
          px-4
          overflow-y-scroll
        `}
        >
          <h2 className="font-semibold text-2xl text-slate-500">Select tags</h2>
          <span className="text-slate-600 font-light text-sm">Maximum number of tags: 5</span>
          <div className="flex gap-2 flex-wrap mt-4  overflow-y-scroll">
            {tags.map(item => (
              <Tags
                disabled={tagsValue.indexOf(item) === -1 ? false : true} 
                key={item}
                value={item}
                toggle={toggleTag}
              />
            )) }
          </div>
          <div className="flex items-center gap-4 ">
            <div 
              onClick={() => addTag()}
              className="
                mt-2 
                cursor-pointer 
                w-1/4 
                py-2 
                rounded-lg 
                flex 
                items-center 
                justify-center 
                text-white 
                bg-orange-400"
            >
              add
            </div>
            <span className="font-light text-sm text-orange-400">Selected {tagsValue.length}/5</span>
          </div>
        <div 
          className="absolute top-4 right-4" 
          onClick={() => setModalOpen(false)}
        >
          <AiOutlineCloseCircle size={24}/>
        </div>
      </div>

    </div>
  );
}
 
export default TagsModal;