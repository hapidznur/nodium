import Head from 'next/head'
import styles from '../../styles/home.module.scss'
import Layout from '../../components/full.layout'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function DocRoll({ allPostsData }) {
  return (
    <Layout>
    <header>
        <div className={styles.logo}>
          <img src="/nod.svg"/>
        </div>
        <nav className={styles.menu}>
          <ul>
            <li><a href="#">Random</a></li>
            <li><a href="#">Buy me coffe</a></li>
          </ul>
        </nav>
    </header>
        <div class="wrapper">
            <section className={styles.headerImage}>

            </section>
            <section class="main">
            {/* <img src="http://abbeyjfitzgerald.com/wp-content/uploads/2017/06/flexbox-header.jpg"/> */}
                <h2>Flexbox Layout</h2>

                <p>Starting from the outside and working in, adding display: flex; to the container is the first step in any flexbox layout. The flex-direction is column, so this will position all sections under each other.    </p>
            
            <p>One handy thing is how easy it is to align text. In the navigation, with align-items: baseline, all navigation items are aligned to the baseline of the text so they look more uniform. </p>
            </section>
            <section className={styles.footer}>
            <h4>Related Article</h4>
            <ul>
            {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
            <Link href={`/posts/${id}`}>
            <a>{title}</a>
            </Link>
            <br />
            <small >
            <Date dateString={date} />
            </small>
            </li>
            ))}
           </ul>
            </section>
        </div>
   </Layout>
  )
}
