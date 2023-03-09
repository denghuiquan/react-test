// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
// import { Provider } from 'react-redux'
// import store from './store'

import { Global } from '@emotion/react'
import styles from './styles'
import { ThemeProvider } from '@emotion/react'
import ErrorBoundaries from './pages/ErrorBoundaries'
import App from './components/App'

const theme = {
  color: {
    primary: 'green'
  }
}

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <ThemeProvider theme={theme}>
    <Global styles={styles}></Global>
    <App />
    {/* <ErrorBoundaries /> */}
  </ThemeProvider>,
  document.getElementById('root'),
  function () {
    // console.log('ReactDOM.render Callback')
  }
)
