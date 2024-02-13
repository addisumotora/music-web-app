import styled from "@emotion/styled";
import { HiMenuAlt2 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useCallback, useEffect } from "react";
import {
  getMusicAction,
  getMusicByIdAction,
  searchMusicAction,
} from "../features/music/musicSlice";
import MusicCard from "./MusicCard";
import { RootState } from "../features/store";
import { logout } from "../features/user/userSlice";
import { debounce } from "lodash";
import { sidebarAction } from "../features/modal/modalSlice";
import { IoPlayCircleOutline } from "react-icons/io5";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  width: 95%;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 500px) {
    display: none;
  }
`;
const Button = styled.div`
  padding: 10px;
  background-color: #009688;
  border-radius: 5px;
  cursor: pointer;
`;
const Card = styled.div`
  border-radius: 0.5rem;
  display: flex;
  margin: 2rem;
  padding: 1rem;
  gap: 2rem;
  @media (max-width: 950px) {
    width: 27vw;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const Image = styled.img`
  position: relative;
  width: 20rem;
  object-fit: cover;
  border-radius: 0.2rem;
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
  font-size: 20px;
`;
const AtSpan = styled.span`
  color: #a3a3a3;
  font-weight: 400;
  font-size: 1rem;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const MusicDetail = () => {
  const { loading, music } = useSelector((state: any) => state.musicReducer);
  const { user } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMusicByIdAction({ id }));
  }, [id]);

  return (
    <div>
      <Header>
        <HiMenuAlt2
          onClick={() => dispatch(sidebarAction())}
          size={30}
          cursor="pointer"
        />
        <ButtonContainer>
          {!user ? (
            <>
              <Button style={{ background: "none" }}>Sign up</Button>
              <Button>Sign In</Button>
            </>
          ) : (
            <Button onClick={() => dispatch(logout())}>Logout</Button>
          )}
        </ButtonContainer>
      </Header>
      <div>
        {loading ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#878080">
            <div
              style={{
                backgroundColor: "#14252f",
                borderRadius: ".5rem",
                display: "flex",
                padding: "15px",
                height: "15rem",
                margin: "2rem",
              }}
            >
              <Skeleton height={"15rem"} width={"20rem"} />
              <div
                style={{
                  gap: "10px",
                  margin: "10px",
                }}
              >
                <Skeleton
                  style={{ marginBottom: "1rem" }}
                  width={500}
                  count={4}
                />
              </div>
            </div>
          </SkeletonTheme>
        ) : (
          <Card>
            <ImageContainer>
              <Image className="image" src={music?.image} />
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
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span style={{ color: "#009688" }}>TItle :</span>{" "}
                  <AtSpan>{music.title}</AtSpan>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span style={{ color: "#009688" }}>Genre :</span>{" "}
                  <AtSpan>{music.genre}</AtSpan>
                </p>
              </div>
            </TitleContainer>
          </Card>
        )}
      </div>
      <div style={{ margin: "2rem" }}>
        <h1>Songs</h1>
      </div>
    </div>
  );
};

export default MusicDetail;
