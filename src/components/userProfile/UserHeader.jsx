import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

import HeaderName from "../profileMail/HeaderName";

const UserHeader = ({isOpenModals}) => {
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
      <Head>
        <title>Flumpf - {userName}</title>
      </Head>
      <HeaderName
        isOpenModal={() => isOpenModals(isOpenAbout => isOpenAbout = !isOpenAbout)}
        profileColor={userAvatar}
        name={userName}
      />
    </div>
  );
}
 
export default UserHeader;