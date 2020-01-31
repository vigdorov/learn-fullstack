export interface ConnectedProps {
  usersList: any[];
}

export interface ConnectedDispatch {
  loadUsers: Function;
  handleCall: Function;
}


export type Props = ConnectedProps & ConnectedDispatch;