import {ACTIONS} from "./reducer";

const createAction = (type: string, payload?: any) => ({
  type, payload
});

export const actions = {
  requestUsers: () => createAction(ACTIONS.HANDLE_LOAD_USERS),
  addUser: (payload?: any) => createAction(ACTIONS.CREATE_USER, payload),
};