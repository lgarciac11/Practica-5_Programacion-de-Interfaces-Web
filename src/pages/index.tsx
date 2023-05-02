import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css';

type Props = {}

const IndexPage: NextPage<Props> = () => {
  return (
    <div>
      <h1>Star Wars</h1>
      <div>
        <Link href="/Movies">
          <a className={styles.button}>Films</a>
        </Link>
      </div>
      <div>
        <Link href="/Planets">
          <a className={styles.button}>Planets</a>
        </Link>
      </div>
      <div>
        <Link href="/Vehicles">
          <a className={styles.button}>Vehicles</a>
        </Link>
      </div>
    </div>
  )
}

export default IndexPage
