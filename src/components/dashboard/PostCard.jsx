import { AiOutlineMore, AiOutlineHeart, AiOutlineSend } from 'react-icons/ai'

const PostCard = () => {
  return ( 
    <div className="p-4 bg-white rounded-lg flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="grid grid-cols-post grid-rows-2 items-center gap-y-0 gap-x-2">
          <div className="w-8 h-8 bg-slate-300 rounded-lg row-span-full"></div>
          <span className="font-light text-slate-800 text-sm self-end">Tristan Preston</span>
          <div className="self-start text-xs text-slate-400">now</div>
        </div>
        <div className="">
          <AiOutlineMore size={22}/>
        </div>
      </div>
      <div className="">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
      </div>
      <div className="w-full h-[300px] flex gap-4">
        <div className="rounded-lg bg-lime-100 h-full w-full"></div>
        <div className="rounded-lg bg-orange-100 h-full w-full"></div>
      </div>
      <div className="flex items-center gap-5">
        <div className="px-2 py-2 border flex items-center gap-2 rounded-full">
          <AiOutlineHeart size={24} className='text-slate-400'/>
          <span className='text-slate-800'>0</span>
        </div>
        <div className="">
          <AiOutlineSend size={24} className='text-orange-400'/>
        </div>
      </div>
    </div>
  );
}
 
export default PostCard;