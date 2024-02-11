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

export const createIMusic = async (music: any) => {
  try {
    const response = await api.post("api/music/create-music", music);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const updateIMusic = async (music: any) => {
  try {
    const response = await api.put(`api/music/${music?.id}`, music);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const getIMusic = async () => {
  try {
    const response = await api.get('api/music')
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteIMusic = async (id: string) => {
  try {
    const response = await api.delete(`api/music/${id}`)
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};



