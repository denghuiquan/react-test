import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Test from './pages/Test'
// import Home from './pages/Home'
// import List from './pages/List'
// import NotFound from './pages/NotFound'

const Home = lazy(() => import(/* webpackChunkName: "Home" */ './pages/Home'))
const List = lazy(() => import(/* webpackChunkName: "List" */ './pages/List'))
const NotFound = lazy(() =>
  import(/* webpackChunkName: "NotFound" */ './pages/NotFound')
)

function App () {
  return (
    <BrowserRouter>
      <Link to='/'>首页 </Link>
      <Link to='/list'>列表页</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List />} errorElement={<NotFound />} />
        </Routes>
      </Suspense>
      <Test />
    </BrowserRouter>
  )
}

export default App

// import * as React from 'react'
// import React, { memo, useEffect, useState } from 'react'
// import Todos from './components/Todos'
// import Counter from './components/Counter'
// // import CounterStore from './store/CouterStore'
// import UserForm from './components/UserForm'

// import { RootStoreProvider } from './store'
// // 1. import `ChakraProvider` component
// import { ChakraProvider, CSSReset, Button, Box } from '@chakra-ui/react'
// import chakraTheme from '@chakra-ui/theme'
// import TestAdvance from './TestAdvance'
// console.log(chakraTheme)
// chakraTheme.config.initialColorMode = 'dark'
// chakraTheme.config.useSystemColorMode = true

// const counterStore = new CounterStore()

// function App () {
//   React.useEffect(() => {
//     console.log('useEffect')
//   }, [])

//   const [flag, setFlag] = useState(true)
//   return (
//     // <div>
//     //   <Todos />
//     //   <Counter counterStore={counterStore} />
//     // </div>
//     <ChakraProvider theme={chakraTheme}>
//       <CSSReset />
//       <RootStoreProvider>
//         {/* <Todos />
//         <Counter />
//         <Button>按钮</Button>
//         <Box w='200px' h='100px' bgColor='tomato'></Box> */}
//         {/* <UserForm></UserForm> */}
//         {flag && <TestAdvance />}
//         <button onClick={() => setFlag(flag => !flag)}>
//           {flag ? '卸载' : '挂载'}TestAdvance组件
//         </button>
//       </RootStoreProvider>
//     </ChakraProvider>
//   )
// }

// class App extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       person: { name: '张三', age: 20, job: 'waiter' }
//     }
//   }

//   updateName () {
//     setInterval(() => {
//       this.setState({ person: { ...this.state.person, job: 'Writer' } })
//     }, 3000)
//   }

//   componentDidMount () {
//     console.log('componentDidMount')
//     this.updateName()
//   }

//   /* shouldComponentUpdate (nextProps, nextState) {
//     if (
//       nextState.person.age !== this.state.person.age ||
//       nextState.person.name !== this.state.person.name
//     ) {
//       return true
//     } else {
//       return false
//     }
//   } */

//   render () {
//     return (
//       <div>
//         <RegularComponent name={this.state.person.name} />
//         <PureComponent name={this.state.person.name} />
//       </div>
//     )
//   }
// }

// class RegularComponent extends React.Component {
//   render () {
//     console.log('RegularComponent')
//     return <div>{this.props.name}</div>
//   }
//   shouldComponentUpdate (nextProps, nextState) {
//     console.log(this.props, nextProps)
//     if (nextProps.name !== this.props.name) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

// class PureComponent extends React.PureComponent {
//   render () {
//     console.log('PureComponent')
//     return <div>{this.props.name}</div>
//   }
// }

// function App () {
//   const [person, setPerson] = useState({ name: '张三', age: 20, job: 'waiter' })
//   const [index, setIndex] = useState(0)

//   useEffect(() => {
//     let timer = setInterval(() => {
//       setIndex(prev => prev + 1)
//       setPerson({ ...person, job: 'chef' })
//     }, 1000)
//     return () => {
//       clearInterval(timer)
//     }
//   }, [index, person])
//   return (
//     <div>
//       {index}
//       <ShowName person={person} />
//     </div>
//   )
// }
// function compare (prevProps, nextProps) {
//   if (
//     prevProps.person.name !== nextProps.person.name ||
//     prevProps.person.age !== nextProps.person.age
//   ) {
//     return false
//   }
//   return true
// }
// const ShowName = memo(function ({ person }) {
//   console.log('render...')
//   return (
//     <div>
//       {person.name} {person.age}
//     </div>
//   )
// }, compare)

// export default App
