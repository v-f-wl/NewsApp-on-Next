import 'tailwindcss/tailwind.css';
import '../app/globals.css'
import Head from 'next/head';
import Container from "../components/ContainerApp";
import Header from "../components/Header";
import LeftSide from "../components/LeftSide";
import MainContainer from "../components/MainContainer";
import ProfileMain from "../components/ProfileMain";


export default function ProfilePage(){
  return ( 
    <div className='b-col'>
      <Head>
        <title>Flumpf - Profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover'/>
      </Head>
        <Container>
          <Header/>
          <MainContainer isGrid={false} >
            <LeftSide/>
            <ProfileMain/>
          </MainContainer>
        </Container>
    </div>
  );
}