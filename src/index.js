import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from './style/index'
import {Provider} from 'react-redux';
import store from './store/index';
import {setToken} from './store/actions/authAction';
import {Routes} from './routes/index'

const token = localStorage.getItem('token');
store.dispatch(setToken(token));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
