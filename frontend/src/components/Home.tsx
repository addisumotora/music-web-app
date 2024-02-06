import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import RightSide from "./RightSide";
import styled from "@emotion/styled";

const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    color: white;
`
const Home = () => {
  return (
    <HomeContainer>
      <SideNav />
      <Outlet />
      <RightSide />
    </HomeContainer>
  );
};

export default Home;
