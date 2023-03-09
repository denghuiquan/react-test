import React from 'react'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

function TestAdvance () {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器被触发了')
    }, 1000)
    // 返回一个卸载时会被触发的函数来对timer进行清理
    return () => clearInterval(timer)
  }, [])
  return <div>Test</div>
}

export default observer(TestAdvance)
