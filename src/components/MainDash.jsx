import HeaderDash from "./dashboard/HeaderDash";
import PostCard from "./dashboard/PostCard";

const MainDash = () => {
  return (  
    <div className="relative overflow-y-scroll rounded-t-xl snap-none">
      <HeaderDash/>
      <div className="flex flex-col gap-4 overflow-hidden pt-8">
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </div>
    </div>
  );
}
 
export default MainDash;