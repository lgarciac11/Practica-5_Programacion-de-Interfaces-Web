import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css';

type Props = {}

const IndexPage: NextPage<Props> = () => {
  return (
    <div>
      <h1>Star Wars</h1>
      <div>
        <Link className={styles.button} href="/movies">
          Films
        </Link>
      </div>
      <div>
        <Link className={styles.button} href="/planets">
          Planets
        </Link>
      </div>
      <div>
        <Link className={styles.button} href="/vehicles">
          Vehicles
        </Link>
      </div>
    </div>
  )
}

export default IndexPage
