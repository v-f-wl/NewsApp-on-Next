'use client'
import Header from "../components/Header";
import LeftSide from "../components/LeftSide";
import MainContainer from "../components/MainContainer";
import MainDash from "../components/MainDash";
import RightSide from "../components/dashboard/RightSide";
import Container from '../components/ContainerApp'
import 'tailwindcss/tailwind.css';



export default function Home() {
  return (
    <div>
      <Container>
        <Header search/>
        <MainContainer isGrid={true}>
          <LeftSide/>
          <MainDash/>
        </MainContainer>
      </Container>
    </div>
  )
}
