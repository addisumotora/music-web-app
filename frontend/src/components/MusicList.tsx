import styled from "@emotion/styled";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoPlayCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import CardSkeleton from "./CardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { GetMusicType, Music } from "../types/types";
import { useEffect } from "react";
import {
  deleteMusicAction,
  getMusicAction,
  setUpdate,
  setselectedMusic,
} from "../features/music/musicSlice";
import { openModal } from "../features/modal/modalSlice";
import MusicCard from "./MusicCard";

const MusicContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  padding: 0 20px;

  &::-webkit-scrollbar {
    display: hidden;
    width: 0;
  }
`;
const CategoryContainer = styled.div`
  width: 100%;
`;

const Card = styled.div`
  background-color: #14252f;
  border-radius: 0.5rem;
  padding: 15px;
  width: 27vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  width: 100%;
`;
const CardHeader = styled.div`
  width: 100%;
`;
const Image = styled.img`
  position: relative;
  width: 27vh;
  height: 20vh;
  object-fit: cover;
  border-radius: 0.2rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 20px 0;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.div`
  padding: 10px;
  background-color: #009688;
  border-radius: 5px;
  cursor: pointer;
`;
const Input = styled.input`
  width: 50%;
  padding: 15px;
  border-radius: 5px;
  background-color: #5555;
  border: none;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: #a29e9e;
  }
`;
const ActionButtonContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-items: end;
  justify-content: flex-end;
  button {
    background: none;
    color: white;
    border: none;
    color: red;
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  div {
    position: absolute;
    display: hidden;
    bottom: 0;
    z-index: -1;
  }

  &:hover {
    div {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.8;
      z-index: 999;
      transition: bottom 0.3s ease;
    }
  }
`;
const TitleContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const AtSpan = styled.span`
  color: #a3a3a3;
  font-weight: 600;
  font-size: 1rem;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const MusicList = () => {
  const { loading, musics, deleting } = useSelector(
    (state: any) => state.musicReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMusicAction());
  }, []);


  return (
    <MusicContainer>
      <Header>
        <HiMenuAlt2 size={30} cursor="pointer" />
        <Input placeholder="Search songs, albums" />
        <ButtonContainer>
          <Button style={{ background: "none" }}>Sign up</Button>
          <Button>Sign In</Button>
        </ButtonContainer>
      </Header>
      <CategoryContainer>
        <CardHeader>
          <h2>Discover</h2>
          <p>Explore sonic realms with our Discover feature.</p>
        </CardHeader>
        {loading ? (
          <CardSkeleton />
        ) : (
          <MusicCard musics = {musics}/>
        )}
      </CategoryContainer>
      <CategoryContainer>
        <CardHeader>
          <h2>New Releases</h2>
          <p>Explore sonic realms with our Discover feature.</p>
        </CardHeader>
        <MusicCard musics={musics.slice(0, Math.ceil(musics.length / 2))}/>
      </CategoryContainer>
    </MusicContainer>
  );
};

export default MusicList;
