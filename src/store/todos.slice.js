// 创建todos 状态切片
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector
} from '@reduxjs/toolkit'
import axios from 'axios'

const todosAdapter = createEntityAdapter({ selectId: todo => todo.cid })

console.log(todosAdapter)

export const TODO_SLICE_KEY = 'todos'

export const loadTodos = createAsyncThunk(
  'todos/loads',
  // (payload, thunkAPI) => {
  //   axios
  //     .get(payload)
  //     .then(response => thunkAPI.dispatch(setTodos(response.data)))
  // }
  payload => axios.get(payload).then(response => response.data)
)

const { reducer: TodosReducer, actions } = createSlice({
  name: TODO_SLICE_KEY,
  initialState: todosAdapter.getInitialState(),
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        // state.push(action.payload)
        todosAdapter.addOne(state, action.payload)
      },
      prepare: todo => {
        console.log('addTodo>>>', todo)
        return {
          payload: { id: Math.random(), cid: Math.random(), ...todo }
        }
      }
    },
    deleteTodo: {
      reducer: (state, action) => {
        console.log('deleteTodo reducer>>>', state, action)
        // state.splice(action.payload.index, 1)
        todosAdapter.removeOne(state, action.payload.id)
      },
      prepare: todo => {
        console.log('deleteTodo>>>', todo)
        return {
          payload: { index: todo.index, id: todo.id }
        }
      }
    },
    setTodos: (state, action) => {
      console.log('setTodos reducer>>>', state, action)
      // action.payload.forEach(todo => state.push(todo))
      todosAdapter.addMany(state, action.payload)
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loadTodos.fulfilled, (state, action) => {
        console.log('loadTodos.fulfilled reducer>>>', state, action)
        // action.payload.forEach(todo => state.push(todo))
        todosAdapter.addMany(state, action.payload)
      })
      .addCase(loadTodos.pending, (state, action) => {
        console.log('loadTodos.pending reducer>>>', state, action)
        return state
      })
  }
  /* extraReducers: {
    [loadTodos.fulfilled]: (state, action) => {
      console.log('loadTodos.fulfilled reducer>>>', state, action)
      // action.payload.forEach(todo => state.push(todo))
      todosAdapter.addMany(state, action.payload)
    },
    [loadTodos.pending]: (state, action) => {
      console.log('loadTodos.pending reducer>>>', state, action)
      return state
    }
  } */
})

const { selectAll } = todosAdapter.getSelectors()
export const selectTodos = createSelector(
  state => state[TODO_SLICE_KEY],
  selectAll
)
export const { addTodo, deleteTodo, setTodos } = actions
export default TodosReducer
