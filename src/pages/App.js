import React from 'react'
import Home from './Home'
import List from './List'
import Test from './Test'

function App () {
  return (
    <>
      {true && <Test />}
      <Home />
      <List />
    </>
  )
}

export default App
