import {User} from "../services/usersAPI";

export interface RootState {
  userList: any[];
  selectUser?: User;
}

export interface Action {
  type: string;
  payload: any;
}