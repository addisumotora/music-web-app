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

const TopPicks = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
  margin: 2rem;
  border-bottom: 2px solid #1c2c35;
  padding-bottom: 20px;
  div p{
    padding: 0px;
    font-size: small;
    margin: 10px;
  }
`;

const Image = styled.img`
  width: 5rem;
  height: 100%;
  object-fit: cover;
  border-radius: 0.2rem;
  object-fit: cover;
`;

const RightSide = () => {
  return (
    <Container>
      <h1>Top Picks</h1>
      <TopPicks>
        <Image src="./images/logo3.png" />
        <div>
          <p>Title</p>
          <p>Artsit</p>
        </div> 
      </TopPicks>
      <TopPicks>
        <Image src="./images/logo3.png" />
        <div>
          <p>Title</p>
          <p>Artsit</p>
        </div> 
      </TopPicks>
      <TopPicks>
        <Image src="./images/logo3.png" />
        <div>
          <p>Title</p>
          <p>Artsit</p>
        </div> 
      </TopPicks>

      <TopPicks>
        <Image src="./images/logo3.png" />
        <div>
          <p>Title</p>
          <p>Artsit</p>
        </div> 
      </TopPicks>
      <TopPicks>
        <Image src="./images/logo3.png" />
        <div>
          <p>Title</p>
          <p>Artsit</p>
        </div> 
      </TopPicks>
    </Container>
  );
};

export default RightSide;
