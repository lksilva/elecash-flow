// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BusinessList from '../components/BusinessList/BusinessList';
import * as BusinessActions from '../actions/business';

function mapStateToProps(state) {
  return {
    business: state.business.business
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BusinessActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessList);
