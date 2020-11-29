import Axios from "axios";
import { User } from "../model/user";
import { APIs } from "./apis";

const getUsersGitLab = async (userName: string): Promise<User[]> => {

  // const res = await Axios.get(`${APIs.REPOSITORY_GIT_LAB}/users?username=${userName}`);
  const res = await Axios.get(`${APIs.REPOSITORY_GIT_LAB}/users?username=${userName}`);
  const lista: any[] = res.data
  const listUserGitLab = lista.slice(0, 5).map(item => {
    return ({
      id: item.id,
      nameUser: item.name,
      img_avatar: item.avatar_url,
      link: item.web_url,
      gitlab: true,
    })
  })
  const users: User[] = User.parseArray(listUserGitLab);

  return users;
}
const getUsersGitHub = async (userName: string): Promise<User[]> => {

  const res = await Axios.get(`${APIs.REPOSITORY_GIT_HUB}/search/users?q=${userName}`);
  const lista: any[] = res.data.items
  const listUserGitHub = lista.filter(item => item.type === 'User').slice(0, 5).map(item => {
    return ({
      id: item.id,
      nameUser: item.login,
      img_avatar: item.avatar_url,
      link: item.html_url,
      github: true,
    })
  })
  const users: User[] = User.parseArray(listUserGitHub);
  return users;
}

export const Repository = {
  getUsersGitLab,
  getUsersGitHub
}