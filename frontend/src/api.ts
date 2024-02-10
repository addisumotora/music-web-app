import axios from "axios";
import { ILoginUser, IRegisterUser, Music } from "./types/types";
import api from "./httpInterceptor";

export const login = async (user: ILoginUser) => {
  try {
    const response = await api.post("api/user/signin", user);
    return response.data;  
  } catch (error) {
    return Promise.reject(error);  
  }
};

export const createUser = async (user: IRegisterUser) => {
  try {
    const response = await api.post("api/user/signup", user);
    return response.data;  
  } catch (error) {
    return Promise.reject(error);  
  }
};

//music

export const createIMusic = async (imusic: any) => {
  console.log(imusic, 'musicmmmmmmmmmmmmmmm')
  try {
    const response = await api.post("api/music/create-music", imusic);
    return response.data;  
  } catch (error) {
    return Promise.reject(error);  
  }
};
