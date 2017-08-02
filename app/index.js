import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { configureStore, history } from './store/configureStore';
import './app.global.css';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { darkBlack, grey300, fullBlack } from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import injectTapEventPlugin from 'react-tap-event-plugin';

// global.Intl = require('intl');

// global.Intl = require.ensure([
//   'intl',
//   'intl/locale-data/jsonp/br.js'
// ], (require) => {
//   require('intl');
//   require('intl/locale-data/jsonp/br.js');
// });

injectTapEventPlugin();

const store = configureStore();

const muiTheme = getMuiTheme({
  // palette: {
  //   // textColor: darkBlack,
  //   // disabledColor: '#789fdc'
  //   primary1Color: '#37474f',
  //   primary2Color: '#62727b',
  //   primary3Color: '#102027',
  //   accent1Color: '#b3e5fc',
  //   accent2Color: '#e6ffff',
  //   accent3Color: '#82b3c9',
  //   textColor: '#000000',
  //   alternateTextColor: '#ffffff',
  //   canvasColor: '#b3e5fc',
  //   borderColor: grey300,
  //   disabledColor: fade(darkBlack, 0.3),
  //   pickerHeaderColor: '#37474f',
  //   clockCircleColor: fade(darkBlack, 0.07),
  //   shadowColor: fullBlack,
  // },
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
