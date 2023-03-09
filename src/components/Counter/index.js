import React from 'react'
// /** @jsx jsx */
// import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../store'
import { css, keyframes, useTheme } from '@emotion/react'
import {
  Box,
  useColorModeValue,
  useColorMode,
  Button,
  Text,
  LightMode,
  DarkMode
} from '@chakra-ui/react'

const SkyblueButton = styled.button`
  width: 300px;
  height: 30px;
  background: skyblue;
`

/* const Child = styled.div`
  color: red;
`

const Parent = styled.div`
  ${Child} {
    color: green;
  }
` */

const Child = styled.div({
  color: 'red'
})

const Parent = styled.div({
  [Child]: {
    color: 'yellow'
  }
})

const Container = styled.div`
  color: red;
  & > a {
    color: pink;
  }
`
const move = keyframes`
  0% {
    background: skyblue;
    left: 0;
    top: 0;
    font-size: 1rem;
  }
  100% {
    background: green;
    left: 600px;
    top: 300px;
    font-size: 2rem;
  }
`
const box = css`
  color: red;
  width: 200px;
  height: 200px;
  position: absolute;
  animation: ${move} 2s ease;
`

const primaryColor = props => css`
  color: ${props.color.primary};
`

function Counter (props) {
  const theme = useTheme()
  console.log(theme)
  const { counterStore } = useRootStore()
  const { count, increment, decrement } = counterStore
  const stringStyle = css`
    width: 300px;
    height: 30px;
    background: skyblue;
  `
  const objectStyle = css({
    width: 300,
    height: 30,
    background: 'skyblue'
  })
  console.log(stringStyle, objectStyle)
  const AButton = styled.button`
    color: red;
  `
  const base = css`
    color: skyblue;
  `
  const danger = css`
    color: red;
  `

  const { colorMode, toggleColorMode } = useColorMode()
  console.log(colorMode, toggleColorMode)
  const bgColor = useColorModeValue('tomato', 'skyblue')

  return (
    <section>
      <Box w='200px' h='100px' bgColor={bgColor}></Box>
      <Text>当前的颜色模式为 {colorMode}</Text>
      <LightMode>
        <Button>强制颜色模式为 light</Button>
      </LightMode>
      <DarkMode>
        <Button>当前的颜色模式为 dark</Button>
      </DarkMode>
      <Button onClick={toggleColorMode}>切换颜色模式</Button>
      <div css={box} />
      <div css={primaryColor}>Theme primary color</div>
      <button css={[base, danger]}>样式组合的button</button>
      <div css={stringStyle}>App works...with string Styles</div>
      <div css={objectStyle}>App works...with object Styles</div>
      <div>
        <Child>hello Child</Child>
        <Parent>
          <Child>hello Child in Parent</Child>
        </Parent>
        <Container>
          hello Container<a href='http://www.baidu.com/'>A Link</a>
          <p>
            <a href='/#'>link in P</a>
          </p>
        </Container>
        <AButton as='a' href='/#'>
          Click me
        </AButton>
      </div>
      <SkyblueButton>My Button</SkyblueButton>
      <h4 style={{ width: 100, background: 'blue' }}>计数器案例</h4>
      <button onClick={() => decrement()}>-1</button>
      <span
        style={{
          width: '100px',
          display: 'inline-block',
          textAlign: 'center',
          fontSize: '20px'
        }}
      >
        {count}
      </span>
      <button onClick={() => increment()}>+1</button>
    </section>
  )
}

export default observer(Counter)
