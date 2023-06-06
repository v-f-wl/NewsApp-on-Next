import '../app/globals.css'
import Container from "../components/ContainerApp";
import Header from "../components/Header";
import LeftSide from "../components/LeftSide";
import MainContainer from "../components/MainContainer";
import 'tailwindcss/tailwind.css';
import UserProfile from '../components/userProfile/UserProfile';

export default function soon(){
  return ( 
    <Container>
      <Header/>
      <MainContainer>
        <LeftSide/>
        <UserProfile/>
      </MainContainer>
    </Container>
  );
}
 