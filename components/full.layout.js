import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
  <div class="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="RSS Feed"
        />
      </Head>
    <main>{children}</main>
    </div>
  )
}