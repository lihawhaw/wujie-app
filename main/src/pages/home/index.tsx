import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      HomePage
      <Link to='/about'>About</Link>
      <hr />
      <Link to='/wujie'>wujie</Link>
    </div>
  )
}
