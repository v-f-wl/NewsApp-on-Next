import Link from 'next/link';
import {AiOutlineClose} from 'react-icons/ai'

const AuthModal = ({children}) => {
  return ( 
    <div className="w-full h-full lg:w-2/3 lg:h-3/4 rounded-lg lg:grid lg:grid-cols-2 overflow-hidden">
      <div className="hidden lg:flex bg-orange-400  flex-col justify-center gap-4 px-20">
          <h2 className="text-white text-4xl font-bold">Welcome To AirPlay</h2>
          <span className="text-slate-50">Et tempore assumenda et voluptate autem sed esse fugiat qui velit quia 33 voluptate ipsam et repudiandae nostrum. Et voluptas provident et alias praesentium vel deserunt incidunt ea quidem ipsam. Ex Quis iure est distinctio natus et voluptatem adipisci qui architecto rerum aut perferendis odit.</span>
      </div>
      <div className="h-full bg-white flex items-center justify-center relative">
        <Link href='/' className="absolute top-4 right-4">
          <AiOutlineClose size={24}/>
        </Link>
        {children}
      </div>
    </div>
  );
}
 
export default AuthModal;