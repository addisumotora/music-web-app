import { Interface } from "readline";

export interface IRegisterUser {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export interface ILoginUser {
  id?: string;
  name?: string;
  email: string;
  password: string;
}

export interface Music {
  _id?: string;
  title: string;
  album: string;
  genre: string;
  image: File;
  artist: string;
}

export interface GetMusicType {
  _id?: string;
  title: string;
  album: string;
  genre: string;
  image: string;
  artist: string;
}