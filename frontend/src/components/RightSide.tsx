import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import RightSideSkeleton from "./RightSideSkeleton";

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
  margin: 2rem 1rem;
  border-bottom: 2px solid #1c2c35;
  padding-bottom: 20px;
  div p {
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

const Header = styled.h1`
  color: #009688;
  font-size: 30px;
  font-family: sans-serif;
  text-align: center;
`;

const RightSide = () => {
  const { loading, musics } = useSelector(
    (state: RootState) => state.musicReducer
  );
  return (
    <Container>
      <h1>Top Picks</h1>
      {loading && <RightSideSkeleton/>}
      {!loading && (
        <>
          {musics.slice(0, 4).map((music) => (
            <TopPicks>
              <Image src={music.image} alt="" />
              <div>
                <p>{music.artist}</p>
                <p>{music.album}</p>
              </div>
            </TopPicks>
          ))}
        </>
      )}
      <Header>𝒜𝒹𝒹𝒾𝓈𝒱𝒾𝒷𝑒𝓈</Header>
    </Container>
  );
};

export default RightSide;
