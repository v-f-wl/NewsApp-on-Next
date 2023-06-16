import '../app/globals.css'
import 'tailwindcss/tailwind.css';

import Container from "../components/ContainerApp";
import Header from "../components/Header";
import LeftSide from "../components/LeftSide";
import MainContainer from "../components/MainContainer";
import UserProfile from '../components/userProfile/UserProfile';
import Head from 'next/head';

export default function soon(){
  return ( 
    <Container>
      <Head>
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Header/>
      <MainContainer>
        <LeftSide/>
        <UserProfile/>
      </MainContainer>
    </Container>
  );
}
 