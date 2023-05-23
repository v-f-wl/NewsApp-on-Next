
import {  CiTimer} from 'react-icons/ci'
import { FiMoreVertical} from 'react-icons/fi'


const Profile = () => {
  
  const exitApp = () => {
  }

  return ( 
    <div className="md:justify-self-end flex items-center md:gap-4">
      <CiTimer size={24}/>
        <div className="px-2 shadow-sm h-[40px] flex justify-between items-center gap-2 w-[300px] rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-[30px] h-[30px] bg-neutral-200 rounded-lg"></div>
            <div className="font-light text-sm text-slate-800">Tristan Preston</div>
          </div>
          <FiMoreVertical 
            onClick={() => exitApp()}
            size={24} 
            className='text-orange-600 cursor-pointer'
          />
        </div>
    </div>
  );
}
 
export default Profile;