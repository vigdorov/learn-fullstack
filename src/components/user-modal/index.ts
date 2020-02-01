import UserModal from './UserModal';
import {RootState} from '../../store/types';
import {connect} from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  user: state.selectUser,
});

export default connect(
  mapStateToProps,
)(UserModal);
