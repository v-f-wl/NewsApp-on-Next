'use client'

import { useState } from "react";
import {AiOutlineHeart, AiOutlineSend } from 'react-icons/ai'
const ProfileMain = () => {
  const [post, usePost] = useState([1,2,3])

  const Title = ({value}) => (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-2xl capitalize text-slate-500">
        {value}
      </h2>
      <hr />
    </div>
  )

  const PostCard = () => (
    <div className="border rounded-xl p-5 flex flex-col gap-8">
      <div className="text-slate-600 text-lg">Lorem ipsum dolor sit amet. Aut natus suscipit sed omnis iste sed officia totam. Ut tenetur ducimus et voluptate adipisci sit aliquam voluptas nam ratione minus. Ut dolor quia ut sequi voluptatem eos dolores culpa.</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="px-2 py-2 border flex items-center gap-2 rounded-full">
            <AiOutlineHeart size={24} className='text-slate-400'/>
            <span className='text-slate-800'>0</span>
          </div>
          <div className="">
            <AiOutlineSend size={24} className='text-orange-400'/>
          </div>
        </div>
        <div className="">08.02.2022</div>
      </div>
    </div>
  )
  return ( 
    <div className="h-full">
      <div className="bg-white rounded-lg flex items-center gap-2 p-5">
        <div className="w-14 h-14 bg-slate-300 rounded-lg"></div>
        <span className="font-semibold text-3xl text-slate-700 tracking-wide">Tristan Arr</span>
      </div>
      <div className="lg:mt-10 lg:grid lg:grid-cols-32 lg:gap-12 lg:items-start">
        <div className="bg-white rounded-lg py-8 px-4">
          <Title value='your posts'/>

          {post ? 
          (
            <div className="mt-4 flex flex-col gap-3 max-h-[60vh] overflow-y-scroll">
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
            </div>
          ) 
          : 
          (
            <div className="pt-10 text-xl font-light text-slate-300">
              *You don't have any posts yet
            </div> 
          )
          }
        </div>
        <div className="bg-white rounded-lg py-8 px-4">
          <Title value='your pins'/>
          {post ? 
          (
            <div className="">
              You don't have any posts yet
            </div>
          ) 
          : 
          (
            <div className="pt-10 text-xl font-light text-slate-300">
              *You haven't added any pins yet
            </div> 
          )
          }
        </div>
      </div>
    </div>
  );
}
 
export default ProfileMain;