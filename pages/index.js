import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { faGithub, faLinkedin, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
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
            <a className={styles.topbarNavItem}><FontAwesomeIcon icon={faInstagram} /></a>
            <a className={styles.topbarNavBurger}><FontAwesomeIcon icon={faBars} /></a>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.margin}>
            <div className={styles.marginContainer}>
              <ul className={styles.menu}>
                <p>Posts</p>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <p>Misc</p>
                <li><a href="about.asp">About</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.contentContainer}>
                <div className={styles.contentCard}>
                  <div className={styles.contentCardHeader}>
                    <a>Message1</a>
                    <a>2020-12-01</a>
                  </div>
                  <div className={styles.contentCardContainer}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
            </div>
          </div>
          <div className={styles.margin}>
            <div className={styles.marginContainer}></div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a></a>
      </footer>
    </div>
  )
}
