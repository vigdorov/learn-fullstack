import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import Page from './Page';
import {actions} from '../../store/utils';
import {ConnectedDispatch, ConnectedProps} from './types';
import {RootState} from '../../store/types';


const mapStateToProps = (state: RootState): ConnectedProps => ({
  usersList: state.userList
});

const mapDispatchToProps = (dispatch: Dispatch): ConnectedDispatch => ({
  loadUsers: () => dispatch(actions.requestUsers()),
  handleCall: (payload?: any) => dispatch(actions.addUser(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
