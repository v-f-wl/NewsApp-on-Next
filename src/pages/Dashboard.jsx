'use client'

import Header from "@/components/Header";
import LeftSide from "@/components/LeftSide";
import MainContainer from "@/components/MainContainer";
import MainDash from "@/components/MainDash";

const { default: Container } = require("@/components/Container")

const Dashboard = () => {
  return (  
    <Container>
      <Header/>
      <MainContainer>
        <LeftSide/>
        <MainDash/>
        <div className="border">dfvd</div>
      </MainContainer>
    </Container>
  );
}
 
export default Dashboard;