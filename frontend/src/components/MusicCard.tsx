import styled from "@emotion/styled";
import { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import {
  deleteMusicAction,
  setUpdate,
  setselectedMusic,
} from "../features/music/musicSlice";
import { Music } from "../types/types";
import { openModal } from "../features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const Card = styled.div`
  background-color: #14252f;
  border-radius: 0.5rem;
  padding: 15px;
  width: 27vh;
  @media (max-width: 950px) {
    width: 27vw;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const Image = styled.img`
  position: relative;
  width: 27vh;
  height: 20vh;
  object-fit: cover;
  border-radius: 0.2rem;
  @media (max-width: 950px) {
    width: 27vw;
    height: 30vh;
  }
  @media (max-width: 840px) {
    width: 100%;
    height: 30vh;
  }
  @media (max-width: 430px) {
    width: 100%;
    margin: 0;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 20px 0;

  @media (max-width: 840px) {
    margin: 0;
    gap: 3rem;
    width: 100%;
  }

  @media (max-width: 430px) {
    display: flex;
    justify-content: center;
  }
`;

const ActionButtonContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-items: end;
  justify-content: flex-end;
  button {
    background: none;
    border: none;
    color: blue;
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
  font-weight: 400;
  font-size: 1rem;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const MusicCard = ({ musics }: any) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { deleting } = useSelector((state: any) => state.musicReducer);
  const dispatch = useDispatch();
  const udpateMusic = (music: Music) => {
    dispatch(setselectedMusic(music));
    dispatch(setUpdate(true));
    dispatch(openModal());
  };

  return (
    <CardContainer>
      {musics?.map((music: any, index: number) => (
        <NavLink to={`/${music._id}`} key={index} style={{ color: "inherit" }}>
          <Card>
            <ImageContainer>
              <Image className="image" src={music.image} />
              <div>
                {" "}
                <IoPlayCircleOutline size={30} color="white" />
              </div>
            </ImageContainer>
            <TitleContainer>
              <div>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span style={{ color: "#009688" }}>Artist :</span>{" "}
                  <AtSpan>{music.artist}</AtSpan>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span style={{ color: "#009688" }}>Album :</span>{" "}
                  <AtSpan>{music.album}</AtSpan>
                </p>
              </div>
            </TitleContainer>
            <ActionButtonContainer>
              <button onClick={() => udpateMusic(music)}>Edit</button>
              <button
                style={{ color: "red" }}
                onClick={() => {
                  dispatch(deleteMusicAction(music._id));
                  setSelectedIndex(index);
                }}
              >
                {deleting && selectedIndex === index ? "deleting..." : "delete"}
              </button>
            </ActionButtonContainer>
          </Card>
        </NavLink>
      ))}
    </CardContainer>
  );
};

export default MusicCard;
