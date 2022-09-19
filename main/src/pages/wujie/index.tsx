import React from 'react'
import { Link } from 'react-router-dom'
import WujieReact from 'wujie-react'

// const { bus, setupApp, preloadApp, destroyApp } = WujieReact

export default function WujiePage() {
  return (
    <div>
      <Link to='/about'>About</Link>
      <hr />
      <WujieReact
        width='100%'
        height='100%'
        name='xxx'
        url='https://qiankun.vue.lihaha.cn'
        sync={true}
        fetch={fetch}
        props={null}
        beforeLoad={(...a) => console.log('beforeLoad', a)}
        beforeMount={(...a) => console.log('beforeMount', a)}
        afterMount={(...a) => console.log('afterMount', a)}
        beforeUnmount={(...a) => console.log('beforeUnmount', a)}
        afterUnmount={(...a) => console.log('afterUnmount', a)}
      ></WujieReact>
    </div>
  )
}
