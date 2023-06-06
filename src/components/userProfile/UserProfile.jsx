
import UserHeader from "./UserHeader";
import UserWalls from "./UserWalls";

const UserProfile = () => {
  return ( 
    <div className="flex flex-col gap-4">
      <UserHeader/>
      <UserWalls/>
    </div>
  );
}
 
export default UserProfile;