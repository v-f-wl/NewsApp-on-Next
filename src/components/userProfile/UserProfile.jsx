'use client'
import {  useState } from "react";
import UserHeader from "./UserHeader";
import UserWalls from "./UserWalls";

const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return ( 
    <div className="flex flex-col gap-4 max-h-[90vh] lg:max-h-[80vh]">
      <UserHeader
        isOpenModals={(value) => setIsModalOpen(value)}
      />
      <UserWalls
        isModal={isModalOpen}
      />
    </div>
  );
}
 
export default UserProfile;