import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import RightSide from "./RightSide";
import styled from "@emotion/styled";
import FormModal from "./Modal";

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  color: white;
  
  @media (max-width: 430px) {
    display: flex;
    justify-content: center;
  }

`;
const OutletContainer = styled.div`
  width: 80%;
  @media (max-width: 750px) {
    width: 100%;
  }
`
const Home = () => {
  return (
    <HomeContainer>
      <SideNav />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <RightSide />
      <FormModal />
    </HomeContainer>
  );
};

export default Home;
