import { ConstructionIcon } from '../components/icons'

import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <ConstructionIcon className={styles.icon} />
        <h1 className={styles.message}>UNDER CONSTRUCTION</h1>
      </div>
    </main>
  )
}
