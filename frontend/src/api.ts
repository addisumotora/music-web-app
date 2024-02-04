import axios from "axios";
import { User } from "./types/types";
import api from "./httpInterceptor";

export const login = async (user: User) => {
  try {
    const data = await api.post("api/user/signin", user);
    return data;
  } catch (error) {
    return error;
  }
};

export const createUser = async (user: User) => {
  try {
    const data = await api.post("api/user/signup", user);
    return data;
  } catch (error) {
    return error;
  }
};
