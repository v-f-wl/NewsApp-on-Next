import { AiOutlineCloseCircle } from 'react-icons/ai'

const TagsInfo = ({value, clearTag}) => {
  return ( 
    <div className="
      p-3
      flex 
      items-center
      justify-between
      rounded-lg 
      bg-white 
      sticky 
      z-10
      top-0 
      shadow-md 
      shadow-slate-400/10
      "
    >
      <div className="h-8 leading-8 font-semibold text-xl text-slate-700">
        #{value}
      </div>
      <div
        onClick={clearTag}
        className="cursor-pointer"
      >
        <AiOutlineCloseCircle size={20} className='text-orange-400'/>
      </div>
    </div>
  );
}
 
export default TagsInfo;