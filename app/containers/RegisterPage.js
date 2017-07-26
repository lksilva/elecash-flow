import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Register from '../components/Register/Register';
import * as RegisterActions from '../actions/register';

function mapStateToProps(state) {
  return {
    entity: state.register.entity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RegisterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

