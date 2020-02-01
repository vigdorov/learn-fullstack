import {User} from '../../services/usersAPI';

export interface OwnProps {
  userId: string;
}

export interface ConnectedProps {
  user?: User;
}

export type Props = OwnProps & ConnectedProps;
