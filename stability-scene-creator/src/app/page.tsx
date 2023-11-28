import { useState } from 'react'
import Canvas from './Components/Canvas/Canvas'
import SidebarForm from './Components/SidebarForm/SidebarForm'
import TextPrompt from './Components/TextPrompt/TextPrompt'
import styles from './page.module.css'

function Home() {
  return (
    <main className={styles.main}>
      <SidebarForm />
    </main>
  )
}

export default Home;
