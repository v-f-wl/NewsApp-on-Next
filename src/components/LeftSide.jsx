import { AiOutlineUser, AiOutlineBorderlessTable, AiOutlineMail, AiOutlineTeam, AiOutlineSetting } from 'react-icons/ai'
const LeftSide = () => {
  return ( 
    <div className="h-full">
      <ul className="flex flex-col gap-4 py-2">
        <li className="flex gap-2 items-center cursor-pointer">
            <AiOutlineUser size={24} className='text-orange-500'/>
          <span className="mt-0 tracking-wider">Profile</span>
        </li>
        <li className="flex gap-2 items-center cursor-pointer">
            <AiOutlineBorderlessTable size={24} className='text-orange-500'/>
          <span className="mt-0 tracking-wider">Dashdoard</span>
        </li>
        <li className="flex gap-2 items-center cursor-pointer">
            <AiOutlineMail size={24} className='text-orange-500'/>
          <span className="mt-0 tracking-wider">Chats</span>
        </li>
        <li className="flex gap-2 items-center cursor-pointer">
            <AiOutlineTeam size={24} className='text-orange-500'/>
          <span className="mt-0 tracking-wider">Friends</span>
        </li>
        <li className="flex gap-2 items-center cursor-pointer">
            <AiOutlineSetting size={24} className='text-orange-500'/>
          <span className="mt-0 tracking-wider">Settings</span>
        </li>
      </ul>
    </div>
  );
}
 
export default LeftSide;