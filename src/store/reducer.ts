import {RootState, Action} from "./types";

export const ACTIONS = {
  HANDLE_LOAD_USERS: 'HANDLE_LOAD_USERS',
  LOAD_USERS: 'LOAD_USERS',
  CREATE_USER: 'CREATE_USER'
};

const initState: RootState = {
  userList: [],
}

export function reducer(state: RootState = initState, action: Action) {
  switch (action.type) {
    case ACTIONS.LOAD_USERS: {
      return {
        ...state,
        userList: action.payload
      }
    }
  }
  return state;
}