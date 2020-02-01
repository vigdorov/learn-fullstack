import React from 'react';
import UsersList from '../users-list';
import {Props} from './types';
import UserModal from '../user-modal';
import {Link} from 'react-router-dom';

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

  private handleCall = () => {
    this.props.handleCall({
      name: 'Petr',
      surname: 'Petrov',
      phone: 234234,
      avatar: 'gif.jpg'
    });
  }

  public render() {
    const {userId} = this.props.match.params;

    return (
      <div>
      page
      <button onClick={this.handleCall}>add user</button>
      {this.props.usersList.map((user: any) => (
          <div key={user._id} style={style}>
            <Link
              to={user._id}
            >
              {user.name}
            </Link>
          </div>
      ))}
      <UsersList/>
      {userId && (
        <UserModal userId={userId}/>
      )}
    </div>
    );
  }
}

export default Page;