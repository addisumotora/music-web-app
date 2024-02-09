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
`;

const Home = () => {
  return (
    <HomeContainer>
      <SideNav />
      <div style={{width: "80%"}}>
        <Outlet />
      </div>
      <RightSide />
      <FormModal />
    </HomeContainer>
  );
};

export default Home;
