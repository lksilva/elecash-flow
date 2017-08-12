import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home/Home';
import * as RegisterActions from '../actions/register';

function mapStateToProps(state) {
  return {
    serviceOrders: state.register.serviceOrders
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RegisterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

