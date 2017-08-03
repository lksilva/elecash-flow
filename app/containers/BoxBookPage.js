import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BoxBook from '../components/BoxBook/BoxBook';
import * as BoxBookActions from '../actions/boxbook';

function mapStateToProps(state) {
  return {
    boxBooks: state.boxbook.boxBooks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BoxBookActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxBook);
