
import 'tailwindcss/tailwind.css';
import '../app/globals.css'
import Head from 'next/head';

import Container from "../components/ContainerApp";
import Header from "../components/Header";
import MainContainer from '../components/MainContainer';
import LeftSide from '../components/LeftSide';
import SettingsContainer from '../components/settingsUI/SettingsContainer';

const ProfilePage = () => {
  return ( 
    <Container>
      <Head>
        <title>Flumpf - settings</title>
      </Head>
      <Header/>
      <MainContainer isGrid={false} >
        <LeftSide/>
        <SettingsContainer/>
      </MainContainer>
    </Container>
  );
}
 
export default ProfilePage;