import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  background-color: #14252f;
  height: 100vh;
  width: 60vh;
  overflow-y: auto;
  padding: 0 20px;

  &::-webkit-scrollbar {
    display: hidden;
    width: 0;
  }
`;
const RightSide = () => {
  return <Container>RightSide</Container>;
};

export default RightSide;
