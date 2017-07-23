import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import * as HeaderActions from '../actions/header';

function mapStateToProps(state) {
  return {
    items: state.header.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HeaderActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

