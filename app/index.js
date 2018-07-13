import React from 'react'
import { Provider } from 'react-redux'

// import { configureStore } from './store/index'

import ChatApp from './components/ChatApp'

const store = configureStore()

const App = () =>
  <Provider store={store}>
    <ChatApp />
  </Provider>

export default App