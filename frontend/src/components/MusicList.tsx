import styled from "@emotion/styled";
import React from "react";

const MusicContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
`;
const CardContainer = styled.div`
  width: 100%;
`;
const Card = styled.div``;
const Header = styled.div``;
const CardHeader = styled.div`
  width: 100%;
`;
const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #5d5d5e;
`;

const MusicList = () => {
  return (
    <MusicContainer>
      <Header></Header>
      <CardContainer>
        <CardHeader>
          <h1>Discover</h1>
          <p>Explore sonic realms with our Discover feature.</p>
          <Line></Line>
        </CardHeader>
        <div>
          <Card>
            <img src="./images/logo3.png"/>
          </Card>
        </div>
      </CardContainer>
      <CardContainer>
        <CardHeader>
          <h1>New Releases</h1>
          <p>Explore sonic realms with our Discover feature.</p>
        </CardHeader>
        <div>
          <Card>
            <img src="./images/logo3.png"/>
            <h1>title</h1>
            <p>genre</p>
          </Card>
        </div>
        <Line></Line>
      </CardContainer>
      <CardContainer>
        <CardHeader>
          <h1>Editor's Picks</h1>
          <p>Explore sonic realms with our Discover feature.</p>
          <Line></Line>
        </CardHeader>
        <div>
          <Card>
            <img src="./images/logo3.png"/>
          </Card>
        </div>
      </CardContainer>
    </MusicContainer>
  );
};

export default MusicList;
