import React from 'react';
import UsersList from '../users-list';
import {Props} from './types';

const style = {
  border: '1px solid black',
  padding: '10px',
  margin: '5px',
  width: '150px',
};

class Page extends React.PureComponent<Props> {
  public componentDidMount() {
    this.props.loadUsers();
  }

  public handleCall = () => {
    this.props.handleCall({
      name: 'Petr',
      surname: 'Petrov',
      phone: 234234,
      avatar: 'gif.jpg'
    });
  }

  public render() {
    return (
      <div>
      page
      <button onClick={this.handleCall}>add user</button>
      {this.props.usersList.map((user: any) => (
          <div style={style} key={user._id}>{user.name}</div>
      ))}
      <UsersList/>
    </div>
    );
  }
}

export default Page;