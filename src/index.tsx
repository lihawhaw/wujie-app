import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import AppRouter from './router/router'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<AppRouter />)
}
