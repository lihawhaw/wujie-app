import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import loadable from '@loadable/component'
// import Layout from '@/layout'

const Home = loadable(() => import('../pages/home'))
const About = loadable(() => import('../pages/about'))
const Wujie = loadable(() => import('../pages/wujie'))
const NoMatch = loadable(() => import('../components/no-match'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='wujie' element={<Wujie />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}
