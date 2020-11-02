import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { faGithub, faLinkedin, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faCamera, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Doo dee doo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.topbar}>
        <div className={styles.topbarContainer}>
          <div className={styles.topbarTitle}>
            Blog Title Here.
          </div>
          <div className={styles.topbarNav}>
            <a className={styles.topbarNavItem}><FontAwesomeIcon icon={faGithub} /></a>
            <a className={styles.topbarNavItem}><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className={styles.topbarNavItem}><FontAwesomeIcon icon={faFacebook} /></a>
            <a className={styles.topbarNavItem}><FontAwesomeIcon icon={faTwitter} /></a>
            <a className={styles.topbarNavItem}><FontAwesomeIcon icon={faCamera} /></a>
            <a className={styles.topbarNavBurger}><FontAwesomeIcon icon={faBars} /></a>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.margin}>
            <div className={styles.marginContainer}>test</div>
          </div>
          <div className={styles.content}>
            <div className={styles.contentContainer}>test</div>
          </div>
          <div className={styles.margin}>
            <div className={styles.marginContainer}>test</div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          footer
        </a>
      </footer>
    </div>
  )
}
