
import 'tailwindcss/tailwind.css';
import Container from "../components/ContainerApp";
import Header from "../components/Header";
import '../app/globals.css'
import MainContainer from '../components/MainContainer';
import LeftSide from '../components/LeftSide';
import SettingsContainer from '../components/settingsUI/SettingsContainer';
import Head from 'next/head';

const ProfilePage = () => {
  return ( 
    <Container>
      <Head>
        <title>Air Play - settings</title>
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