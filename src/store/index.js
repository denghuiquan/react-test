import React from 'react'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import TodosReducer, { TODO_SLICE_KEY } from './todos.slice'
import logger from 'redux-logger'

import CounterStore from './CouterStore'
import TodoStore from './TodoStore'

import { createContext, useContext } from 'react'
class RootStore {
  constructor () {
    this.counterStore = new CounterStore()
    this.todoStore = new TodoStore()
  }
}

const rootStore = new RootStore()
const RootContext = createContext()

export const RootStoreProvider = ({ children }) => {
  return (
    <RootContext.Provider value={rootStore}>{children}</RootContext.Provider>
  )
}

export const useRootStore = () => {
  return useContext(RootContext)
}

export default configureStore({
  reducer: {
    [TODO_SLICE_KEY]: TodosReducer
  },
  middleware: [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== 'production'
})
