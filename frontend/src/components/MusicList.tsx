import styled from "@emotion/styled";
import { HiMenuAlt2 } from "react-icons/hi";
import CardSkeleton from "./CardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  getMusicAction, searchMusicAction,
} from "../features/music/musicSlice";
import MusicCard from "./MusicCard";
import { RootState } from "../features/store";
import { logout } from "../features/user/userSlice";
import {debounce}  from 'lodash'

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
  font-size: 18px;
  border-radius: 5px;
  background-color: #5555;
  border: none;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: #a29e9e;
  }
`;


const MusicList = () => {
  const { loading, musics} = useSelector(
    (state: any) => state.musicReducer
  );
  const { user }  = useSelector((state: RootState) => state.userReducer)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getMusicAction());
  }, []);


  const delayedSearch = useCallback(
    debounce((searchTerm: string) => {
      dispatch(searchMusicAction({searchTerm}));
    }, 500),
    [dispatch]
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    if(searchTerm){
      delayedSearch(searchTerm);
    }else{
      dispatch(getMusicAction());
    }
  };

  return (
    <MusicContainer>
      <Header>
        <HiMenuAlt2 size={30} cursor="pointer" />
        <Input onChange={(e) => handleSearchChange(e)} placeholder="Search songs, artist, album ..." />
        <ButtonContainer>
          {!user? <>
            <Button style={{ background: "none" }}>Sign up</Button>
            <Button>Sign In</Button>
          </> : <Button onClick={() => dispatch(logout())}>Logout</Button>}
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
          <>{musics.length > 0? <MusicCard musics = {musics}/> : <h3>No Musics Found</h3>}</>
        )}
      </CategoryContainer>
      <CategoryContainer>
        <CardHeader>
          <h2>New Releases</h2>
          <p>Explore sonic realms with our Discover feature.</p>
        </CardHeader>
        <>{musics.length > 0? <MusicCard musics={musics.slice(0, Math.ceil(musics.length / 2))}/>: <h3>No Musics Found</h3>}</>
      </CategoryContainer>
    </MusicContainer>
  );
};

export default MusicList;
