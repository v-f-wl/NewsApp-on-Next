import { useRouter } from "next/router";
import HeaderName from "../profileMail/HeaderName";
import { useEffect, useState } from "react";
import axios from "axios";

const UserHeader = () => {
  const router = useRouter()
  const { id } = router.query

  const [userName, setUserName] = useState()
  const [userAvatar,  setUserAvatar] = useState()
  useEffect(() => {
    if(id !== undefined){
      axios.get('/api/userGetOne', {
        params: {
          userId: id
        }
      }).then(res => {
        setUserName(res.data.fullName)
        setUserAvatar(res.data.avatar)
      })
      .catch(error => console.log(error))
    }
  }, [id])
  return ( 
    <div className="bg-white rounded-lg flex items-center justify-between">
      <HeaderName
        profileColor={userAvatar}
        name={userName}
      />
    </div>
  );
}
 
export default UserHeader;