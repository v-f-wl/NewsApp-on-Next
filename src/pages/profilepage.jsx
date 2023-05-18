'use client'
import 'tailwindcss/tailwind.css';
import Container from "../components/ContainerApp";
import Header from "../components/Header";
import LeftSide from "../components/LeftSide";
import MainContainer from "../components/MainContainer";

import ProfileMain from "../components/ProfileMain";

const ProfilePage = () => {
  return ( 
    <Container>
      <Header/>
      <MainContainer isGrid="false" >
        <LeftSide/>
        <ProfileMain/>
      </MainContainer>
    </Container>
  );
}
 
export default ProfilePage;