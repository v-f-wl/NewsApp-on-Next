import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return ( 
    <div className="hidden lg:block justify-self-center relative">
      <div className="shadow-sm h-[40px] flex justify-between items-center gap-2 w-[300px] rounded-lg">
        <input type="text" placeholder="Search..." className='w-full px-2 outline-none text-sm font-light'/>
        <button className='p-1'>
          <CiSearch size={24}/>
        </button>
      </div>
      <div className="hidden absolute top-10 border w-[1000px] right-[-50%] translate-x-2/4 bg-gray-500">modal</div>
    </div>
  );
}
 
export default Search;