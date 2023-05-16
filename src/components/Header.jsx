import Profile from "./headerUI/Profile";
import Search from "./headerUI/Search";

const Header = () => {
  return (  
    <div className="h-[65px] bg-white rounded-b-lg grid grid-cols-3 items-center px-5 shadow-md shadow-slate-400/10">
      <div className="">
        Logo
      </div>
      <Search/>
      <Profile/>
    </div>
  );
}
 
export default Header;