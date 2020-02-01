import {RouteComponentProps} from "react-router-dom";

export interface ConnectedProps {
  usersList: any[];
}

export interface ConnectedDispatch {
  loadUsers: Function;
  handleCall: Function;
}

export interface RouteParams {
  userId: string;
}

export type RouterProps = RouteComponentProps<RouteParams>;

export type Props = RouterProps & ConnectedProps & ConnectedDispatch;