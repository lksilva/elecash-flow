import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { configureStore, history } from './store/configureStore';
import './app.global.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, darkBlack } from 'material-ui/styles/colors';

const store = configureStore();

const muiTheme = getMuiTheme({
  palette: {
    textColor: darkBlack,
    disabledColor: '#789fdc'
  },
  fontFamily: 'Roboto, sans-serif',
});

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>
  </MuiThemeProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppContainer>
          <NextRoot store={store} history={history} />
        </AppContainer>
      </MuiThemeProvider>,
      document.getElementById('root')
    );
  });
}
