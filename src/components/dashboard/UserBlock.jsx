import Link from 'next/link';

const UserBlock = ({userId, color, isLoaded, authorName, dateString}) => {
  return ( 
    <Link href={`/userprofile?id=${userId}`} className="grid grid-cols-post grid-rows-2 items-center gap-y-0 gap-x-2">
      <div style={{backgroundColor: color}} className="w-8 h-8 rounded-lg row-span-full"></div>
      <span 
        className={`
          ${isLoaded ? '' : 'w-[100px]'}
          ${isLoaded ? '' : 'h-[15px]'}
          ${isLoaded ? '' : 'bg-slate-300'}
          ${isLoaded ? '' : 'animate-pulse'}
          ${isLoaded ? '' : 'rounded-md'}
          font-light 
          text-slate-800 
          text-sm 
          self-end
          w-[250]
          lg:w-[290px]
          overflow-hidden
        `}
      >
        {isLoaded ? authorName : ''}
      </span>
      <div className="self-start text-xs text-slate-400">
        {isLoaded ? dateString : ''}
      </div>
    </Link>
  );
}
 
export default UserBlock;