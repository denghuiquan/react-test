import React, { lazy } from 'react'
import { Suspense } from 'react'

function Test () {
  let LazyComponent = null
  if (false) {
    LazyComponent = lazy(() =>
      import(/* webpackChunkName: "Home-Test" */ './Home')
    )
  } else {
    LazyComponent = lazy(() =>
      import(/* webpackChunkName: "List-Test" */ './List')
    )
  }
  return (
    <Suspense fallback={<div>Test loading...</div>}>
      <LazyComponent />
    </Suspense>
  )
}

export default Test
