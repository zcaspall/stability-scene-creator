import { useState } from 'react'
import Canvas from './Components/Canvas/Canvas'
import styles from './page.module.css'

function Home() {
  return (
    <main className={styles.main}>
      <Canvas />
    </main>
  )
}

export default Home;
