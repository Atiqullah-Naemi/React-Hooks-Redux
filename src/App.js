import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import BycycleContainer from './components/bycycleContainer'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BycycleContainer />
      </div>
    </Provider>
  )
}

export default App
