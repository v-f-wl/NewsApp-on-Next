
import UserHeader from "./UserHeader";
import UserWalls from "./UserWalls";

const UserProfile = () => {
  return ( 
    <div className="flex flex-col gap-4 max-h-[60vh] lg:max-h-[80vh] ">
      <UserHeader/>
      <UserWalls/>
    </div>
  );
}
 
export default UserProfile;