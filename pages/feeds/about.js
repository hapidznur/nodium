import Head from 'next/head'
import styles from '../../styles/home.module.scss'
import Layout from '../../components/full.layout'
export default function Feed() {
  return (
    <Layout>
       <Head>
        <title>postTitle</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.childcontainer}> kiri </div>
        <div> tengah </div>
        <div className={styles.feed}>
           <div className={styles.compount}> lorem ipsum dolor amet In addition to the property-specific values listed in their definitions, all properties defined in this specification also accept the CSS-wide keywords as their property value. For readability they have not been repeated explicitly.In addition to the property-specific values listed in their definitions, all properties defined in this specification also accept the CSS-wide keywords as their property value. For readability they have not been repeated explicitly. </div>
           <div className={styles.compount}> lorem </div>
           <div className={styles.compount}> lorem </div>
           <div className={styles.compount}> lorem </div>
           <div className={styles.compount}> lorem </div>
        </div>
        <div> kiri </div>
        <div> tengah </div>
        <div> tengah </div>
        <div> tengah </div>
        <div> tengah </div>
        <div> tengah </div>
        <div> tengah </div>
        <div> tengah </div>
        <div> tengah </div>
        <div> tengah </div>
        <div> tengah </div>
        <div> tengah </div>
        <div> tengah </div>
        <div> tengah </div>
        <div> tengah </div>
      </div>
       
   </Layout>
  )
}
