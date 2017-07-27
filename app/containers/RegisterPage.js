import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Register from '../components/Register/Register';
import * as RegisterActions from '../actions/register';

function mapStateToProps(state) {
  const hasForm = !!state.form.Register;
  if (hasForm) {
    return {
      entity: state.register.entity,
      register_form: state.form.Register
    };
  }
  return {
    entity: state.register.entity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RegisterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

